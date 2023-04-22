import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.listen(process.env.API_PORT || 3333);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

console.log(`Server running on port ${process.env.API_PORT || 3333}`);
