import express from "express";
import router from "./routes/index.js";
import { routeNotFound } from "./middleware/routeNotFound.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(router);

app.use(routeNotFound);

app.listen(PORT, () => {});