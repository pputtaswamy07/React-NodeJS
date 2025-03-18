const express = require("express");
const router = express.Router();

const Reservation = require("../models/Reservation");

router.post("/", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ success: true, data: newReservation });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Export the router
module.exports = router;
