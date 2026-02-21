const express = require("express");
const app = express();

const postRoutes = require("./routes/posts.routes");

app.get("/", (req, res) => {
  res.send("Welcome to the Blogify API!");
});

app.use("/api/v1/posts", postRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});