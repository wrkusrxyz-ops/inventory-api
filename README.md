# Inventory API

A lightweight Express REST API for looking up warehouse inventory items.

## Getting started

```bash
npm install
npm start
```

The API runs at `http://localhost:3000`.

## Endpoints

| Method | Endpoint     | Description                 |
| ------ | ------------ | --------------------------- |
| GET    | `/items`     | List all inventory items    |
| GET    | `/items/:id` | Get a single item by its ID |
