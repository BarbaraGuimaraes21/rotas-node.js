import express from 'express'
import dicaController from "./controllers/controller.js"

const app = express()
const port = 3003

app.use(express.json())

dicaController(app)

app.listen(port, ()=>{
console.log(`http://localhost:${port}/`);
})

