const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const items = [
  {
    id: 1,
    sku: "WH-1001",
    name: "Pallet Jack",
    category: "Equipment",
    quantity: 4,
    location: "Aisle A1",
  },
  {
    id: 2,
    sku: "WH-1002",
    name: "Shrink Wrap Roll",
    category: "Packaging",
    quantity: 120,
    location: "Aisle B3",
  },
  {
    id: 3,
    sku: "WH-1003",
    name: "Barcode Scanner",
    category: "Electronics",
    quantity: 15,
    location: "Aisle C2",
  },
  {
    id: 4,
    sku: "WH-1004",
    name: "Safety Helmet",
    category: "Safety",
    quantity: 60,
    location: "Aisle D1",
  },
  {
    id: 5,
    sku: "WH-1005",
    name: "Corrugated Box (Medium)",
    category: "Packaging",
    quantity: 450,
    location: "Aisle B1",
  },
];

// GET /health - service health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// GET /items - list all inventory items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET /items/:id - get a single inventory item
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Inventory API running on http://localhost:${PORT}`);
});
