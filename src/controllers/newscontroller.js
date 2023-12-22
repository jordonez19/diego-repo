const { News } = require("../models/usersmodel");
const sequelize = require("../database");

export const getData = async (req, res) => {
  const { id } = req.params;
  try {
    let query = "SELECT * FROM news";
    if (id) {
      query += ` WHERE id = ${id}`;
    }

    const news = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postdata = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNews = await News.create({ title, content });
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putdata = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedNews = await News.update(
      { title, content },
      {
        where: { id },
        returning: true,
      }
    );
    res.json(updatedNews[1][0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
