import routes from "./routes/router";
import pkj from "../package.json";

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));
app.use(cors());
app.set("pkj", pkj);

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkj").name,
    author: app.get("pkj").author,
    version: app.get("pkj").version,
    description: app.get("pkj").description,
  });
});

routes(app);
export default app;



