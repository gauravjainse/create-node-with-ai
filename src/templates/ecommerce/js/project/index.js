import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT | 3002;

app.listen(PORT, (PORT) => {
  console.log(`Ecommerce app is running on port ${PORT}`);
});
