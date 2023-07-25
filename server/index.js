const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io')

app.use(cors())
app.get("/", (req, res) => {
    res.send('Hello world')
})
app.get("/client", (req, res) => {
    // console.log(req)
    res.send('?q=search_term 查詢參數(search parameters)的值為\n' + `Hello ${req.query.name}`)
})
app.get("/users/:id", (req, res) => {
    // console.log(req)
    res.send('/:id 路徑參數(path parameters)的值為\n' + `Welcome ${req.params.id}`)
})

const server = http.createServer(app);

const io = new Server(server, {
    cors:
    {
        origin: process.env.NODE_ENV === 'prod' ? process.env.CLIENT_URL : 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    socket.on("join_room", (data) => {
        console.log("join room: ", data)
        socket.join(data)
    })
    socket.on("leave_room", (data) => {
        socket.leave(data)
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data );
    })
})

const port = 3001

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
