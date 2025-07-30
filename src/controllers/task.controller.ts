import { Request, Response, NextFunction } from "express";
import * as taskService from "../services/task.service";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = Number(req.params.id);
    const task = await taskService.getTaskById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskData = req.body;
    const task = await taskService.createTask(taskData);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = Number(req.params.id);
    const taskData = req.body;
    const updatedTask = await taskService.updateTask(taskId, taskData);
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = Number(req.params.id);
    const deleted = await taskService.deleteTask(taskId);
    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
