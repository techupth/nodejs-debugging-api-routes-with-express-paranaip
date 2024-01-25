import { Router } from "express";
import { todos as todosFromFile } from "../data/todos.js";

let todos = [...todosFromFile];

const todoRouter = Router();

todoRouter.get("/", (req, res) => {
  return res.json({
    data: todos,
  });
});
export default todoRouter;
