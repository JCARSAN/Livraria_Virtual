import mongoose from "mongoose";

//const dbURI = process.env.MONGO_DB || "";
const dbURI = "mongodb+srv://jcarsan1000:v4kqWNWBetOw7Coq@livrariavirtual.i4ovnl7.mongodb.net/?retryWrites=true&w=majority";

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
