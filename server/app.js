const express = require('express')
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT || 8000;
const connectDatabase = require('./config/database');
const session = require('express-session');

connectDatabase();


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes')

app.use('/', routes);
app.use(express.static(path.join(__dirname,"../frontend")));

app.get('*',(req,res)=>{
    res.send(`<h1>Page not Found, Error 404</h1>`);
})

app.listen(port,()=>{   
    console.log(`server is running on port ${port}`);
})

// module.exports = app;