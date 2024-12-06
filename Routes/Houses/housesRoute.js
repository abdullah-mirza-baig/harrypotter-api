import express from 'express'
import { housesData } from './housesData.js';



export const housesRoute = express.Router();


housesRoute.get('/houses',(req,res)=>{


    res.status(200).send({status:200, message:"Success",data: housesData})

})