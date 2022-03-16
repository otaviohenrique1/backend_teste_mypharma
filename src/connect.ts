import mongoose from "mongoose";

export default (uri: string) => {
  const connect = () => {
    mongoose
      .connect(uri)
      .then(() => {
        return console.log('Conectado com sucesso');
      })
      .catch((error) => {
        console.log('Erro em conectar ao banco de dados');
        console.error(error);
        return process.exit(1); /* Sai do processo */
      });
  };
  connect();

  mongoose.connection.on('Disconectado', connect);
};