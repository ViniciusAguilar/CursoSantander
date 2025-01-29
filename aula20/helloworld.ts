import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import {readFileSync}from 'fs'

interface IUser{
  name: string,
  age: number
}
config()
const app = express()
app.use('/client',express.static(path.join(__dirname,'public')))
const port = process.env.API_PORT ?? 3300
const url = process.env.API_BASE_URL ??'http://localhost'

const usuarios: IUser[] = [{
  name: 'Fulano',
  age: 35
},
{
  name: 'Ciclano',
  age: 43
}]


app.get('/api',(req, res) => {
    //const homePagePath = path.join(__dirname,'home.html')
    //const homePage = readFileSync(homePagePath)
     return res.send('Hello World')
  })

  app.get('/api/users',(req, res) => {
    //const homePagePath = path.join(__dirname,'home.html')
    //const homePage = readFileSync(homePagePath)
     return res.send(usuarios)
  })

app.listen(port, () => {
     console.log(`servidor rodando na porta ${url}:${port}`)
    })