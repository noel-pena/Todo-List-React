import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.MONGODB_URI;

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const Item = mongoose.model("Items_today", itemSchema);
const Item2 = mongoose.model("Items_week", itemSchema);
const Item3 = mongoose.model("Items_month", itemSchema);

async function connectToMongoDB() {
  try {
    await mongoose.connect(dbUrl),
      {
        useNewUrlParser: true,
        ssl: true,
        useUnifiedTopology: true,
      };
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export { Item, Item2, Item3, connectToMongoDB };
