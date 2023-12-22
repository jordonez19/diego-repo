const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mi_aplicacion", "root", "6452487", {
  host: "localhost",
  dialect: "mysql",
});

// Verificar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a MYSQL conectado correctamente.");
  })
  .catch((err) => {
    console.error("No se puede conectar a MYSQLDB:", err);
  });

module.exports = sequelize;

