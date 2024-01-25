import express from "express";
import assignmentRouter from "./apps/assignmentRouter.js";
import todoRouter from "./apps/todoRouter.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assignments", assignmentRouter);
app.use("/todos",todoRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
