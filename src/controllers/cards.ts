import type { RequestHandler } from "express";
import fs from "node:fs/promises";
import path from "node:path";

const cardsPath = path.join(import.meta.dirname, "../../data/cards.json");

const getCards: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(cardsPath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      "message": "An error has occurred on the server"
    });
  }
}

export { getCards };