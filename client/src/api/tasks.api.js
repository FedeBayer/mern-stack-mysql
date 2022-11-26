import axios from "axios";
export const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};
