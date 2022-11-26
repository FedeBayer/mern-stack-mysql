import cors from "cors";
import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(cors());
/*cors({
    origin: "http://localhost:5173",
  })*/
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
