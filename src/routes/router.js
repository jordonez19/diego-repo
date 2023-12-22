
import userroutes from "./userroutes";
import newsroutes from "./newsroutes";

export default function (app) {
  app.use("/user", userroutes);
  app.use("/news", newsroutes);
}
