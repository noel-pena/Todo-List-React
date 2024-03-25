import express from "express";
import bodyParser from "body-parser";
import { Item, connectToMongoDB } from "./mongodb.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

connectToMongoDB();

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/add", async (req, res) => {
  const { newItem } = req.body;
  try {
    const item = new Item({ title: newItem });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
