import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
