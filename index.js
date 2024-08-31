const express = require('express')
const app = express()

    //ROTA
        // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
            // GET - Pega uma info
            // POST - Cria uma info
            // PUT - Altera toda a info
            // PATH - Altera parte da info
            // DELETE - Apaga a info

        // Name - Um identificador da rota

        // Function (Callback) - Responsável por executar algum comando
app.get('/soma', (req, res) => {
    const soma = 100 + 1;

    res.send({soma: soma})
})

app.listen(3000)