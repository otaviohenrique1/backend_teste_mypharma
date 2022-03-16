import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import { uri } from "./config";
import connect from "./connect";

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect(uri);
app.use(routes);

const porta = 3333;

app.listen(porta, () => console.log("Express iniciado"));