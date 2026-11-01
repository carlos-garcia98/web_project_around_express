import type { RequestHandler } from "express";
import fs from "node:fs/promises";
import path from "node:path";

interface UsersData {
  name: string;
  about: string;
  avatar: string;
  _id: string;
}

const users_path = path.join(import.meta.dirname, "../../data/users.json");

const getUsers: RequestHandler = async (req, res) => {
  const data = await fs.readFile(users_path, "utf8");
  res.json(JSON.parse(data));
}

const getUserById: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(users_path, "utf8");

    const users: UsersData[] = JSON.parse(data);
    const user = users.find((user) => req.params.userId === user._id);

    if (!user) {
      return res.status(404).json({
        "message": "ID de usuario no encontrado"
      });
    }

    res.json(user);

  } catch (error) {
    console.error(error);
  }
}

export { getUsers, getUserById };
