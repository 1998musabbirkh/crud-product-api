import express from "express";
import mongoose from "mongoose";
import router from "./routes/product.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", router);

//Getting root
app.get("/", (req, res) => {
  res.send("Hello from API");
});

//Database connection
mongoose
  .connect(
    "mongodb+srv://1998illegaldream:CFPFo7wkZcbGk5NM@ecommercedb.mgm19.mongodb.net/ecommerce_db?retryWrites=true&w=majority&appName=ecommercedb"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("App is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
  });
