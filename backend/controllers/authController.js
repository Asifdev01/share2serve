const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ─── In-Memory User Store ─────────────────────────────────────────────────────
const users = [];
let nextId = 2;

// Seed admin account at startup (password: admin123)
const seedAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  users.push({
    id: "1",
    name: "Admin",
    email: "admin@share2serve.com",
    password: hashedPassword,
    role: "admin",
  });
  console.log("✅ Admin account ready: admin@share2serve.com / admin123");
};
seedAdmin();

// ─── Helpers ─────────────────────────────────────────────────────────────────
const generateToken = (user) =>
  jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

// ─── Signup ──────────────────────────────────────────────────────────────────
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  if (users.find((u) => u.email === email.toLowerCase())) {
    return res.status(409).json({ message: "User already exists with this email" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: String(nextId++),
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
    role: "user",
  };
  users.push(newUser);

  const token = generateToken(newUser);
  return res.status(201).json({
    message: "Account created successfully",
    token,
    user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
  });
};

// ─── Login ───────────────────────────────────────────────────────────────────
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  const user = users.find((u) => u.email === email.toLowerCase());
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = generateToken(user);
  return res.status(200).json({
    message: "Login successful",
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  });
};

// ─── Get Me (protected) ───────────────────────────────────────────────────────
const getMe = (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  const { password, ...safeUser } = user;
  res.status(200).json({ user: safeUser });
};

module.exports = { signup, login, getMe };
