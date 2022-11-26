import axios from "axios";

export const getTasksRequest = async (req, res) => {
  return await axios.get("http://localhost:4000/tasks");
};

export const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:4000/tasks/${id}`);
};
