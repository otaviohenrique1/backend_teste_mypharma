import { Request, Response } from "express";
import UsuarioModel from "../models/Usuario";

export default {
  async cadastro(request: Request, response: Response) {
    const data = await UsuarioModel.create(request.body);
    return response.status(201).json(data);
  },
  async login(request: Request, response: Response) {
    return response.status(201);
  },
  async logout(request: Request, response: Response) {
    return response.status(201);
  },
}
