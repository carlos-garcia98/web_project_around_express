import type { RequestHandler } from "express";
import fs from "node:fs/promises";
import path from "node:path";

interface UsersData {
  name: string;
  about: string;
  avatar: string;
  _id: string;
}

const usersPath = path.join(import.meta.dirname, "../../data/users.json");

const getUsers: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(usersPath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      "message": "An error has occurred on the server"
    });
  }
}

const getUserById: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(usersPath, "utf8");

    const users: UsersData[] = JSON.parse(data);
    const user = users.find((user) => req.params.userId === user._id);

    if (!user) {
      return res.status(404).json({
        "message": "User ID not found"
      });
    }

    res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      "message": "An error has occurred on the server"
    });
  }
}

export { getUsers, getUserById };
