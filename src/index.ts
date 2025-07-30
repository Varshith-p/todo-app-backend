import express, { Express, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./secrets";
import taskRouter from "./routes/task.routes";
import errorHandler from "./middlewares/error.middleware";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/tasks", taskRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
