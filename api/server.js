
const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'question/responce'
})

// connection.connect(function(e){
//     try{
//         connection.query(
//             "SELECT * FROM `openquizzdb` WHERE `langue`='fr' LIMIT 10",
//             function (err, result){
//                 try{
//                     console.log(result)
//                 }catch(e){
//                     console.log('Désoler !! ${err:messqge}')
//                 }
//             }
//         )
//     }catch(e){
//         console.error('Désoler !! ${err:message}')
//     }
// })
const query = "SELECT * FROM `openquizzdb` WHERE `langue`='fr' AND `quizz_id`=1"
connection.query(
    "SELECT * FROM `openquizzdb` WHERE `langue`='fr' AND `quizz_id`=1",
    function (err, result) {       
		if (err) throw err;       
		console.log(result);     
	}
)

app.listen(port, () => {
    console.log('Le serveur est en ligne')
})