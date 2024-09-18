import { createServer } from "http";
import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 8000;

// const server = createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hello hello 2 ");
//   console.log(response);
// });
app.use(express.json());

app.get("/articles", (request, response) => {
  response.send("Hello from express");
});

app.post("/addArticle", (request, response) => {
  const { title } = request.body;
  response.send(`Product succesfully created ${title}`);
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
