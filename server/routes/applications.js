const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// Add application
router.post("/", async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.json(app);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all applications
router.get("/", async (req, res) => {
  const apps = await Application.find().sort({ appliedDate: -1 });
  res.json(apps);
});

// Update application status
router.put("/:id", async (req, res) => {
  const updated = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Delete application
router.delete("/:id", async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: "Application deleted" });
});

module.exports = router;
