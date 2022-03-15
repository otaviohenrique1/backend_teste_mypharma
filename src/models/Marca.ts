import { Schema, model } from "mongoose";

interface Marca {
  uuid: string;
  nome: string;
}

const schema = new Schema<Marca>({
  uuid: { type: String, required: true },
  nome: { type: String, required: true }
});

const MarcaModel = model<Marca>('Marca', schema);

export default MarcaModel;

/*
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  uuid: 'string',
  nome: 'string'
});

const Marcas = mongoose.model('Marcas', schema);

export default Marcas;
*/