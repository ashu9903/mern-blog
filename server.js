const express = require("express");
require("dotenv").config({ path: "./config/.env" });

const db = require("./config/db");
require("colors");
db();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);
const app = express();
app.use(
  cors()
  // cors({
  //   origin: ["http://localhost:5173", "http://127.0.0.1:5173/"],
  //   methods: ["GET"],
  // })
);

app.use(express.json());
app.use("/blog", require("./Routes/blogRoutes"));

app.listen(PORT, console.log(`server running http://localhost:${PORT}`.bgBlue));
