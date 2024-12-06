import express from 'express'
import { charactersData } from './charactersData.js';



export const charactersRoute = express.Router();


charactersRoute.get('/characters',(req,res)=>{


    res.status(200).send({status:200, message:"Success",data: charactersData})

})