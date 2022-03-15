import { Schema, model } from "mongoose";

interface Categoria {
  uuid: string;
  nome: string;
  descricao: string;
}

const schema = new Schema<Categoria>({
  uuid: { type: String, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true }
});

const CategoriaModel = model<Categoria>('Categoria', schema);

export default CategoriaModel;

/*
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  uuid: 'string',
  nome: 'string',
  descricao: 'string'
});

const Categorias = mongoose.model('Categorias', schema);

export default Categorias;
*/