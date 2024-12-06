import express from 'express'
import dotenv from 'dotenv'
import { booksRoute } from './Routes/Books/booksRoute.js'
import { charactersRoute } from './Routes/Characters/charactersRoute.js'
import { housesRoute } from './Routes/Houses/housesRoute.js'
// import { housesData } from './Routes/Houses/housesData.js'


const app = express()
dotenv.config()


app.get('/',(req,res)=>{
    res.status(200).send('Welcome To Harry Potter API')
})




app.use('/',booksRoute)
app.use('/',charactersRoute)
app.use('/',housesRoute)







const PORT = process.env.PORT
app.listen(PORT,()=>{


        console.log(`server is running on port ${PORT}`)

})