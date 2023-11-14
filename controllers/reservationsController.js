const db = require("../config/db");

const getAllReservationByUserID = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM reservation WHERE userID= ?`,
      [req.params.id]
    );
    res.status(200).json({
      success: true,
      message: "Reservations data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to retrieve data",
      error,
    });
  }
};

const getAllReservationByEventID = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM reservation WHERE eventID=? `,
      [req.params.id]
    );
    res.status(200).json({
      success: true,
      message: "Reservations data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to retrieve data",
      error,
    });
  }
};

const getAllReservation = async (req, res) => {
  try {
    const [result] = await db.query(`SELECT * FROM reservation
    JOIN users ON reservation.userID = users.ID
    JOIN events ON reservation.eventID = events.ID
    JOIN venues ON events.venueID = venues.ID`);
    res.status(200).json({
      success: true,
      message: "Reservations data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to retrieve data",
      error,
    });
  }
};

module.exports = {
  getAllReservationByUserID,
  getAllReservationByEventID,
  getAllReservation,
};
