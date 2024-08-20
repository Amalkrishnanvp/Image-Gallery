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

// Set view engine: handlebars
app.set("view engine", "hbs");

// Serve static files from 'public' folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { accesser: container });
});

// Start server 
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
