import express from "express";
import {
  addOnePoem,
  getAllPoems,
  getOnePoem,
  deleteOnePoem,
} from "../controlers/poems.js";

const poemsRouter = express.Router();

poemsRouter.get("/", getAllPoems);

poemsRouter.get("/:id", getOnePoem);

poemsRouter.post("/", addOnePoem);

poemsRouter.delete("/:id", deleteOnePoem);

export default poemsRouter;
