const express = require('express')
const app = express()
app.use(express.json())
//importing routes
const routes = require('./routes/routes')


app.get('/', (req,res) => res.send("Hello World"))

app.use('/users', routes)

app.listen(5000, ()=>{
    console.log("server running")
})