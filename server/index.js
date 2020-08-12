require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
// const authController = require('./controllers')

const port = 3993;

const {SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnathorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
    })
);

app.listen(PORT, ()=>console.log(`Hey Hey Your Port Works Today! on ${PORT}`));