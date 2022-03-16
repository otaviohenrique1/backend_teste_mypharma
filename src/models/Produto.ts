import { Schema, model, Document } from "mongoose";

export interface Produto extends Document {
  uuid: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria: string;
  marca: string;
}

const produtoSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true },
  categoria: { type: String, required: true },
  marca: { type: String, required: true }
});

const ProdutoModel = model<Produto>('Produto', produtoSchema);

export default ProdutoModel;

/*
import mongoose from "mongoose";
import CategoriaModel from "./Categorias";
import Marcas from "./Marcas";

const schema = new mongoose.Schema({
  uuid: 'string',
  nome: 'string',
  descricao: 'string',
  preco: 'string',
  estoque: 'string',
  categoria: CategoriaModel,
  marca: Marcas
});
const Produtos = mongoose.model('Produtos', schema);

export default Produtos;
*/