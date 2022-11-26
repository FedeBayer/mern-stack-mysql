import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
/*cors({
    origin: "http://localhost:5173",
  })*/
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
