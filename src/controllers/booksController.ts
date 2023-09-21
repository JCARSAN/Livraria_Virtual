import {Request, Response} from 'express';

const Book = require('../models/Book');

const registerNewBook = async (req: Request, resp: Response) => {
    try {
        const body = req.body;
        //console.log("Body: ",body);
        await Book.create(body);
        resp.json({msg:"Livro Cadastrado com sucesso!"}) 
        resp.sendStatus(200);     
    } catch (error) {
        console.log("Error: ",error);
        resp.json({msg:"Ocorreu um erro ao salvar o livro"});
        resp.sendStatus(400);
    }
}

const findBookById = async (req: Request, resp: Response) => {
    try {
        const {id} = req.params;
        //console.log("Params: ",id);
        const book = await Book.findById(id);
        resp.json({data:book});
        resp.sendStatus(200);
    } catch (error) {
        resp.json({msg:"Livro não encontrado!"});
        resp.sendStatus(400);
    }
}
module.exports = {registerNewBook,findBookById}