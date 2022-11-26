import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";
const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
