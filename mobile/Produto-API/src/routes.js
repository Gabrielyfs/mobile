const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

// Criar produto 
router.post('/produto', async (req, res) => {
    // pegando as informações passadas no corpo da requisição
    const { name, price, description, ingredients, imgUrl } = req.body

    // Salvando o produto
    const produto = await prisma.produto.create({
        data: {name, price: parseFloat(price), imgUrl, description, ingredients}
    })

    // status 201 = created
    return res.status(201).json(produto)
})

// Buscar produto por id
router.get('/produto/:id', async (req, res) => {
    // pegando o id da url
    const { id } = req.params

    // buscando o produto por id
    const produto = await prisma.produto.findUnique({
        where: {id: Number(id)}
    })

    if(!produto) {
        // status 404 = não encontrado 
        return res.status(404).json({error: "Produto não encontrado"})
    }

    return res.status(200).json(produto)
    
})

// Listar todos os produtos
router.get("/produto", async (req, res) => {
    // Buscar o produto no banco
    const produtos = await prisma.produto.findMany()

    return res.json(produtos)
})

router.put("/produto/:id", async (req, res) => {
    const {id} = req.params
    const {name, description, imgUrl, price, ingredients} = req.body

    const produto = await prisma.produto.update({
        where:{id: Number(id)},
        data: {name, price: parseFloat(price), description, imgUrl, ingredients}
    })

    return res.json(produto)
})

module.exports = router