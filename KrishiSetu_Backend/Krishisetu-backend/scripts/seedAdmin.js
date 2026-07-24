/**
 * One-time admin bootstrap script.
 *
 * This is intentionally NOT wired into server.js — it must be run
 * explicitly and manually:
 *
 *   npm run seed:admin
 *
 * It reads admin credentials from environment variables so no
 * password is ever hard-coded in source. Add these to your .env
 * before running (they are only needed for this script, not for
 * normal server operation):
 *
 *   ADMIN_NAME=Admin Name
 *   ADMIN_PHONE=9999999999
 *   ADMIN_PASSWORD=a-strong-password
 *
 * The script is idempotent: if a user with ADMIN_PHONE already
 * exists, it exits without making changes rather than creating a
 * duplicate or overwriting anything.
 */

require("dotenv").config();

const mongoose = require("mongoose");
const dns = require("dns");

const bcrypt = require("bcryptjs");
const User = require("../models/User");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const run = async () => {
  const {
  ADMIN_NAME,
  ADMIN_PHONE,
  ADMIN_PASSWORD,
  ADMIN_EMAIL,
  MONGODB_URI,
} = process.env;

  if (!ADMIN_NAME || !ADMIN_PHONE || !ADMIN_PASSWORD || !ADMIN_EMAIL) {
    console.error(
      "❌ Missing ADMIN_NAME, ADMIN_PHONE, or ADMIN_PASSWORD in your .env file. Add all three before running this script."
    );
    process.exit(1);
  }

  if (!/^[0-9]{10}$/.test(ADMIN_PHONE)) {
    console.error("❌ ADMIN_PHONE must be a valid 10-digit number.");
    process.exit(1);
  }

  if (ADMIN_PASSWORD.length < 6) {
    console.error("❌ ADMIN_PASSWORD must be at least 6 characters long.");
    process.exit(1);
  }

  try {

    
    console.log("Mongo URI:", MONGODB_URI);

await mongoose.connect(MONGODB_URI);

console.log("Connected");
    console.log("✅ Connected to MongoDB");

    const existingAdmin = await User.findOne({ phone: ADMIN_PHONE });

    if (existingAdmin) {
      console.log(
        `ℹ️  A user with phone ${ADMIN_PHONE} already exists (role: ${existingAdmin.role}). No changes made.`
      );
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

    const admin = await User.create({
  name: ADMIN_NAME,
  email: ADMIN_EMAIL,
  phone: ADMIN_PHONE,
  password: hashedPassword,
  role: "admin",
  status: "approved",
});

    console.log("✅ Admin account created successfully:");
    console.log(`   Name:  ${admin.name}`);
    console.log(`   Phone: ${admin.phone}`);
    console.log(`   Role:  ${admin.role}`);
    console.log(
      "\nYou can now log in via POST /api/auth/login with this phone and password."
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to create admin account:", error.message);
    process.exit(1);
  }
};

run();
