import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());
app.listen(process.env.API_PORT || 3000);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

console.log(`Server running on port ${process.env.API_PORT || 3000}`);
