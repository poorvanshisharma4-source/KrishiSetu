/**
 * Minimal, temporary trust score calculator (0-100).
 *
 * This is intentionally simple and self-contained — a single pure
 * function with no DB access of its own — so it can be replaced with
 * a more sophisticated model in a later phase without touching any
 * controller, route, or API response shape. Callers only ever see a
 * single numeric `trustScore` field; nothing else needs to change.
 *
 * Formula (relative to a neutral baseline of 50 for accounts with no
 * history yet):
 *   +5  per completed contract
 *   -10 per cancelled contract
 *   +2  per active (in-progress) contract
 *   +1  per accepted request
 * The result is clamped to the 0-100 range.
 */
const calculateTrustScore = ({
  completedContracts = 0,
  cancelledContracts = 0,
  activeContracts = 0,
  acceptedRequests = 0,
} = {}) => {
  const BASELINE = 50;

  const rawScore =
    BASELINE +
    completedContracts * 5 -
    cancelledContracts * 10 +
    activeContracts * 2 +
    acceptedRequests * 1;

  return Math.max(0, Math.min(100, Math.round(rawScore)));
};

module.exports = { calculateTrustScore };
