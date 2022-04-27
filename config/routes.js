const express = require('express');
const routes = express.Router();

let DadosClientes = [
    { '1': { 'nome': 'João', 'idade': '20', 'sexo': 'M' } },
    { '2': { 'nome': 'Maria', 'idade': '25', 'sexo': 'F' } },
    { '3': { 'nome': 'José', 'idade': '30', 'sexo': 'M' } },
    { '4': { 'nome': 'Pedro', 'idade': '35', 'sexo': 'M' } },
    { '5': { 'nome': 'Ana', 'idade': '40', 'sexo': 'F' } },
]

// Rota para listar todos os clientes
routes.get ('/', (req, res) => {
    return res.json(DadosClientes);
})

// Rota para inserir dados de um cliente específico
routes.post('/add', (req, res) => {
    const body = req.body;

    if(!body)
    return res.status(400).end()

    DadosClientes.push(body);
    return res.json(body);
})

routes.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    let NewDados = DadosClientes.filter(item => {
        if(item[id])
        return item;
    })

    return res.send(NewDados);

})

module.exports = routes;