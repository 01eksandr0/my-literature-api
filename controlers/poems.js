import { Poem } from "../models/poem.js";

export const getAllPoems = async (req, res, next) => {
  try {
    const poems = await Poem.find();
    await res.json(poems);
  } catch (error) {
    console.log(error);
  }
};

export const getOnePoem = async (req, res, next) => {
  try {
    const { id } = req?.params;
    const poem = await Poem.findOne({ _id: id });
    await res.json(poem);
  } catch (error) {
    console.log(error);
  }
};

export const addOnePoem = async (req, res, next) => {
  try {
    const poem = await Poem.create(req.body);
    res.status(201).json(poem);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOnePoem = async (req, res, next) => {
  try {
    const { id } = req?.params;
    const poem = await Poem.deleteOne({ _id: id });
    await res.json(poem);
  } catch (error) {}
};
