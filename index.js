import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import poemsRouter from "./routes/poemsRouter.js";

configDotenv();
const URL = process.env.URL_DB || "";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/api/poems", poemsRouter);

// Обработка маршрутов, которые не найдены
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Обработчик ошибок должен принимать 4 аргумента
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(URL)
  .then(() => {
    app.listen(5357, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
