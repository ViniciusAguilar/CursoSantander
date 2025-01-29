import express, { response } from 'express'
import { config } from 'dotenv'
import path from 'path'
import { writeFile } from 'fs/promises'
import { randomUUID } from 'crypto'
import dbJson from './server.json'
import { writeFileSync } from 'fs'


type User = {

    id: string,
    name: string,
    age: number
}

type CreateUserDTO = Omit<User, "id"> 

config()
const app = express()
app.use(express.json())
app.use('/client',express.static(path.join(__dirname,'public')))
const port = process.env.API_PORT ?? 3300
const url = process.env.API_BASE_URL ??'http://localhost'
const dbJsonPath = path.resolve(process.cwd(), './server.json')

const users = dbJson.users


app.get('/api',(req, res) => {
     return res.send('<h1>API BASE URL</h1>')
  })

app.get('/api/users',(req, res) => {
     return res.send(users)
  })

app.post('/api/users',async(req, res) => {
    const {name, age}: CreateUserDTO = req.body

    if (!name || age < 0){
        const errMessage = Error('O usuario a ser criado precisa de nome e idade')
        return res.status(400).send(errMessage)
    }

    const user = {id:randomUUID(), name, age}


    users.push(user)

    await writeFile( dbJsonPath, JSON.stringify({...dbJson, users}))
    
    return res.status(201).json(user)
})

app.delete('/api/users/:id', (req, res) => {
    const {id} = req.params

    if(!id){
        const errMessage = Error('O usuario a ser deletado precisa de id')
        return res.status(400).send(errMessage)
    }
    const foundUsers = users.find(user => user.id === id)

    if (!foundUsers){
        const errMessage = Error(`O usuario com id ${id} não foi encontrado`)
        return res.status(400).send(errMessage)
    }

   const updatedUsers = users.filter(user => user.id !== id)
    writeFileSync( dbJsonPath, JSON.stringify({...dbJson, users: updatedUsers}))

   return response.status(204).json
})



app.listen(port, () => {
     console.log(`servidor rodando na porta ${url}:${port}`)
    })