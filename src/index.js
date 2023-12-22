import app from "./app";
import "./database";

const port = 3002;
app.listen(port, console.log("server is on port:", port));
