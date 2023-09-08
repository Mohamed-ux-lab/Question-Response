const rooter = require('express')
const cors = require('cors')

const root = rooter()


root.get("/getQuestion", cors({ origin:['*']}), (req, res) => {
    req._construct(() => {
        
    })
})
