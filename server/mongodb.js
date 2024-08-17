import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl =
  "mongodb+srv://noelpena:1234@cluster0.xbaexmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //no critical info therefore removed need for env file

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const Item = mongoose.model("Items_today", itemSchema);
const Item2 = mongoose.model("Items_week", itemSchema);
const Item3 = mongoose.model("Items_month", itemSchema);

async function connectToMongoDB() {
  try {
    await mongoose.connect(dbUrl, {
      ssl: true,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export { Item, Item2, Item3, connectToMongoDB };
