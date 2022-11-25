import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(indexRoutes);
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
