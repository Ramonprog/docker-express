import express from "express";
import { Controller } from "./controller";

const controller = new Controller()

const app = express();
app.use(express.json());

// rotas
app.get("/", controller.index);
app.post("/create", controller.create);

app.listen(3000, () => {
  console.log("🚀 App is running on port 3000 ...");
});