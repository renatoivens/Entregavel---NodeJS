const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

let DadosClientes = [
    { '1': { 'nome': 'João', 'idade': '20', 'sexo': 'M' } },
    { '2': { 'nome': 'Maria', 'idade': '25', 'sexo': 'F' } },
    { '3': { 'nome': 'José', 'idade': '30', 'sexo': 'M' } },
    { '4': { 'nome': 'Pedro', 'idade': '35', 'sexo': 'M' } },
    { '5': { 'nome': 'Ana', 'idade': '40', 'sexo': 'F' } },
]

// Rota para listar todos os clientes
app.get ('/', (req, res) => {
    return res.json(DadosClientes);
})

// Rota para inserir dados de um cliente específico
app.post('/add', (req, res) => {
    const body = req.body;

    if(!body)
    return res.status(400).end()

    DadosClientes.push(body);
    return res.json(body);
})
// Rota para deletar um cliente específico
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    let NewDados = DadosClientes.filter(item => {
        if(item[id])
        return item;
    })

    return res.send(NewDados);

})

app.listen(3000, () => {
    console.log('Express started at port 3000');
    
})