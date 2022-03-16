import { Schema, model, Document } from "mongoose";

export interface Usuario extends Document {
  uuid: string;
  nome: string;
  email: string;
  senha: string;
}

const usuarioSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true }
});

const UsuarioModel = model<Usuario>('Usuario', usuarioSchema);

export default UsuarioModel;

/*
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  uuid: 'string',
  nome: 'string',
  email: 'string',
  senha: 'string'
});

const Usuarios = mongoose.model('Usuarios', schema);

export default Usuarios;
*/