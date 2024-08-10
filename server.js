import express from "express";

const app = express();
const port = 3030;

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { title: "Image Gallery" });
});

app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
