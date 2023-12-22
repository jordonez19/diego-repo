const { User } = require("../models/usersmodel");
const sequelize = require("../database");

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `
      SELECT * FROM Users 
      WHERE email = :email AND password = :password
    `;

    const [user, metadata] = await sequelize.query(query, {
      replacements: { email, password },
      type: sequelize.QueryTypes.SELECT,
    });

    if (!user || user.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    res.status(200).json({ message: "Login exitoso", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getdata = async (req, res) => {
  try {
    const allUsers = await sequelize.query("SELECT * FROM Users", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getdatabyid = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await sequelize.query(
      `SELECT * FROM Users WHERE email = ${email} `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postdata = async (req, res) => {
  const { email, name, password, accountid } = req.body;
  try {
    const newUser = await User.create({ email, name, password, accountid });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putdata = async (req, res) => {
  const { email } = req.params;
  const { name, password, accountid } = req.body;
  try {
    const [updatedRows] = await User.update(
      { name, password, accountid },
      { where: { email }, returning: true }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = await User.findOne({ where: { email } });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
