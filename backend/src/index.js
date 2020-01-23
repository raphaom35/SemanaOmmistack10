const express = require('express');
const mongoose = require('mongoose')
const routes =require('./routes')
const cors= require('cors')
const http =require('http')

const { setupWebsocket } = require('./websocket.js')
mongoose.connect('mongodb+srv://raphael:30307030@cluster0-pcm10.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
const server =http.Server(app)
setupWebsocket(server)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
