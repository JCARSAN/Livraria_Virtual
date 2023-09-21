import mongoose from "mongoose";

const dbURI = process.env.MONGO_DB || "";

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log("Mongoose conectado em: ",dbURI);
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose error error: ",err);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose desconectado!");
});
