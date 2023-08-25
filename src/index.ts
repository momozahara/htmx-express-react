import express from "express";

import dotenv from "dotenv";
dotenv.config();

import Greeting from "./react/greeting";
import path from "path";

const app = express();
const port = process.env.PORT ?? 3000;

// eslint-disable-next-line @typescript-eslint/require-await
async function mockAsync() {
  return "hello";
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/greeting", (req, res) => {
  void (async () => {
    const { name } = req.query;
    res.send(
      Greeting(
        await mockAsync(),
        typeof name === "string"
          ? name.length !== 0
            ? name
            : undefined
          : undefined,
      ),
    );
  })();
});

app.listen(port, () => {
  console.log(`Server listening on port [:${port}]`);
});
