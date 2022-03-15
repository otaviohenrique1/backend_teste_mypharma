import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";
import { uri } from "./config";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
mongoose.connect(uri);
app.use(routes);

app.listen(3333, () => console.log("Express iniciado"));