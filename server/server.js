import express from "express";
import bodyParser from "body-parser";
import { Item, Item2, Item3, connectToMongoDB } from "./mongodb.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist")); //remove for dev; to run use NODE_ENV=production node server/server.js

connectToMongoDB();

//Today
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

app.delete("/api/items/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    await Item.findByIdAndDelete(itemId);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Week
app.get("/api/items2", async (req, res) => {
  try {
    const items = await Item2.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/add2", async (req, res) => {
  const { newItem } = req.body;
  try {
    const item = new Item2({ title: newItem });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/items2/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    await Item2.findByIdAndDelete(itemId);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Month
app.get("/api/items3", async (req, res) => {
  try {
    const items = await Item3.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/add3", async (req, res) => {
  const { newItem } = req.body;
  try {
    const item = new Item3({ title: newItem });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/items3/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    await Item3.findByIdAndDelete(itemId);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
