const Request = require("../models/Request");
const Contract = require("../models/Contract");
const Notification = require("../models/Notification");

/**
 * Builds a merged, most-recent-first activity feed from three
 * collections in parallel (no sequential round-trips), each already
 * limited at the query level so the merge step is cheap.
 *
 * @param {Object} filters
 * @param {Object} [filters.requestQuery] - Mongo filter for Request (default: {} = all)
 * @param {Object} [filters.contractQuery] - Mongo filter for Contract (default: {} = all)
 * @param {Object} [filters.notificationQuery] - Mongo filter for Notification (default: {} = all)
 * @param {number} [limit=10]
 */
const getRecentActivity = async (
  { requestQuery = {}, contractQuery = {}, notificationQuery = {} } = {},
  limit = 10
) => {
  const [requests, contracts, notifications] = await Promise.all([
    Request.find(requestQuery)
      .select("status createdAt requirement")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean(),
    Contract.find(contractQuery)
      .select("status createdAt agreedPrice quantity")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean(),
    Notification.find(notificationQuery)
      .select("title type createdAt")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean(),
  ]);

  const activity = [
    ...requests.map((r) => ({
      type: "request",
      status: r.status,
      message: `Request ${r.status}`,
      refId: r._id,
      createdAt: r.createdAt,
    })),
    ...contracts.map((c) => ({
      type: "contract",
      status: c.status,
      message: `Contract ${c.status}`,
      refId: c._id,
      createdAt: c.createdAt,
    })),
    ...notifications.map((n) => ({
      type: "notification",
      status: n.type,
      message: n.title,
      refId: n._id,
      createdAt: n.createdAt,
    })),
  ];

  activity.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return activity.slice(0, limit);
};

module.exports = { getRecentActivity };
