import "dotenv/config";
import express from "express";
import { myDataSource } from "./database/config";

myDataSource
  .initialize()
  .then(() => {
    console.log("Database connection has been initialized!");
  })
  .catch((err) => {
    console.error("Error during database connection initialization:", err);
  });

const app = express();
app.use(express.json());
app.listen(process.env.API_PORT || 3333);

console.log(`Server running on port ${process.env.API_PORT || 3333}`);
