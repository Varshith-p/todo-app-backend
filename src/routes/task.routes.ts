import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

const taskRouter: Router = Router();

taskRouter.get("/", getTasks).post("/", createTask);
taskRouter
  .get("/:id", getTask)
  .put("/:id", updateTask)
  .delete("/:id", deleteTask);

export default taskRouter;
