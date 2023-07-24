# Build a chat application in Next.js with socket.io

### Client side (Frontend)
In client folder, follow next.js command to run
```yarn dev```
Then you can see the client side will be running at port 3000 as next.js default port.

### Server side (Backend)
In server folder, follow node.js command to run
```node index.js```

or follow nodemon command to run
```nodemon index.js```

Make sure installed nodemon in global of your computer.

Then you can see the server will be started at port 3001.
```Server is running on port 3001```

# Set project on AWS EC2
The big challenge for me is deployed frontned and backend on AWS EC2 server to build a web.
I set up nginx for running a web server, and use SSL as secruity url to visit the website.
I use socke.io-client for client side and socket.io for server side to handshake. It was the first time I make a project for both side to run a web server.

For this project, I haven't made a pretty layout with it, just foucs on functional for the actions about join/leave room, send/recevie message, system send message when the user join/leave.

# use `pm2` handle frontend and backend
This project is using pm2 to handle next.js(frontend) and node.js(backend) on web service.
