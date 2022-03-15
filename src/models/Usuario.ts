import { Schema, model } from "mongoose";

interface Usuario {
  uuid: string;
  nome: string;
  email: string;
  senha: string;
}

const schema = new Schema<Usuario>({
  uuid: { type: String, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true }
});

const UsuarioModel = model<Usuario>('Usuario', schema);

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