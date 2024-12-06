import express from 'express'
import { booksData } from './booksData.js';



export const booksRoute = express.Router();


booksRoute.get('/books',(req,res)=>{


    res.status(200).send({status:200, message:"Success",data: booksData})

})