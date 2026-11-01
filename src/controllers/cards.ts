import type { RequestHandler } from "express";
import fs from "node:fs/promises";
import path from "node:path";

const cardsPath = path.join(import.meta.dirname, "../../data/cards.json");

const getCards: RequestHandler = async (req, res) => {
  const data = await fs.readFile(cardsPath, "utf8");
  res.json(JSON.parse(data));
}

export { getCards };