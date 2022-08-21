require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/user');
const ukiyoRoutes = require('./routes/ukiyo');

const server = express();

// server.use(cors())
// server.use(bodyParser.urlencoded({extended: false}))
// server.use(bodyParser.json())

server.use(express.json())

server.use((req, res, next)=> {
    console.log(req.path, req.method);
    next();
})

server.use('/api/user',userRoutes);
server.use('/api/ukiyo', ukiyoRoutes);

server.listen(process.env.PORT, ()=> {
    console.log(`Connected to Database and Listening on Port ${process.env.PORT}`);
})