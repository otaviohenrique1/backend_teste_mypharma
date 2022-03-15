import { Request, Response } from "express";
import ProdutoModel from "../models/Produto";

export default {
  async cadastro(request: Request, response: Response) {
    const produto = await ProdutoModel.create(request.body);
    return response.status(201).json(produto);
  },
  async listar(request: Request, response: Response) {
    const produtos = await ProdutoModel.find();
    return response.status(201).json(produtos);
  },
  async busca(request: Request, response: Response) {
    const { uuid } = request.params;
    const produto = await ProdutoModel.findOne({ uuid });
    return response.status(201).json(produto);
  },
  async editar(request: Request, response: Response) {
    const { uuid, nome, descricao, preco, estoque } = request.body;
    const data = { nome, descricao, preco, estoque };
    const produto = await ProdutoModel.updateOne(uuid, data);
    return response.status(201).json(produto);
  },
  async excluir(request: Request, response: Response) {
    const { uuid } = request.params;
    const produto = await ProdutoModel.deleteOne({ uuid });
    return response.status(201).json(produto);
  },
}
