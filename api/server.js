const express = require('express')
const { createConnection } = require('mysql')
const { default: root } = require('./router/root')
const cors = require('cors')

const app = express()
const port = 3000

app.get("/api/getquestion",cors({ origin: "http://localhost:8000"}), (req, res) => {
    const con = createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'question/responce'
    })
    function getRandomArbitrary(max) {
        return Math.floor(Math.random() * max);
      }
    const id = getRandomArbitrary(10)  
    const query = "SELECT * FROM `openquizzdb` WHERE `langue`='fr' AND `quizz_id`= ?"
    con.query(query, [id], (err, result) => {
        if(err) throw err
        res.status(200).json(result)
    })
})

app.listen(port, () => {
    console.log('Le serveur est en ligne')
})