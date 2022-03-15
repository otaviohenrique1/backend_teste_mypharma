import { Request, Response } from "express";
import MarcaModel from "../models/Marca";

export default {
  async cadastro(request: Request, response: Response) {
    const produto = await MarcaModel.create(request.body);
    return response.status(201).json(produto);
  },
  async listar(request: Request, response: Response) {
    const produtos = await MarcaModel.find();
    return response.status(201).json(produtos);
  },
  async busca(request: Request, response: Response) {
    const { uuid } = request.params;
    const produto = await MarcaModel.findOne({ uuid });
    return response.status(201).json(produto);
  },
  async editar(request: Request, response: Response) {
    const { uuid, nome, descricao, preco, estoque } = request.body;
    const data = { nome, descricao, preco, estoque };
    const produto = await MarcaModel.updateOne(uuid, data);
    return response.status(201).json(produto);
  },
  async excluir(request: Request, response: Response) {
    const { uuid } = request.params;
    const produto = await MarcaModel.deleteOne({ uuid });
    return response.status(201).json(produto);
  },
}
