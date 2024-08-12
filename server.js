import express from "express";

const app = express();
const port = 1000;

const container = {
  title: "Image Gallery",
  heading: "My Image Gallery",
  imageHolder: [
    { image: "img1", description: "Car" },
    { image: "img2", description: "Hils" },
    { image: "img3", description: "City" },
    { image: "img4", description: "Bulb" },
    { image: "img5", description: "House" },
    { image: "img6", description: "Plant" },
    { image: "img7", description: "Fish" },
    { image: "img8", description: "Bike" },
  ],
};

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { accesser: container });
});

app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
