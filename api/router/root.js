

const rooter = require('express')
const { createConnection } = require('mysql')
const root = rooter()

root.get("/getQuestion", (req, res) => {
    req._construct(() => {
        const con = createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'question/responce'
        })
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        const id = getRandomArbitrary(1,11)  
        const query = "SELECT * FROM `openquizzdb` WHERE `langue`='fr' AND `id`= ?"
        con.query(query, [id], )
    })
})