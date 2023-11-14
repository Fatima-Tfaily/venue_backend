const db = require("../config/db");

const register = async (req, res) => {
  const { fullname, email, password, role } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO users (fullname, email, password, role) VALUES (?,?,?,?);`,
      [fullname, email, password, role]
    );
    console.log(result);
    res.status(201).json({
      success: true,
      message: "User added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error adding a new user",
      error: error.message,
    });
  }
};

const login = (loginUser = (req, res) => {
  const { email, password } = req.body;
  const query =
    "SELECT userID, username, email FROM users WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];
      delete user.password;
      res.json(user);
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

module.exports = {
  register,
  login,
};
