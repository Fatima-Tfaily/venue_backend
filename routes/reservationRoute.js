const express = require("express");
const router = express.Router();

const {
  getAllReservationByUserID,
  getAllReservationByEventID,
  getAllReservation,
} = require("../controllers/reservationsController.js");

router.get("/getByUserId/:id", getAllReservationByUserID);
router.get("/getByEventId/:id", getAllReservationByEventID);
router.get("/getAll", getAllReservation);

module.exports = router;
