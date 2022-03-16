import { Request, Response } from "express";
import ProdutoModel from "../models/Produto";

export default {
  async cadastro(request: Request, response: Response) {
    const data = request.body;
    const produto = await ProdutoModel.create(data);
    return response.status(201).send({
      message: 'Dados salvos com sucesso',
      result: produto
    });
  },
  async listar(request: Request, response: Response) {
    try {
      const produtos = await ProdutoModel.find();
      return response.status(201).send({
        message: 'Dados encontrados',
        result: produtos
      });
    } catch (error) {
      return response.status(404).send({
        message: 'Não encontrado',
        error
      });
    }
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
