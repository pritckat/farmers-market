const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')('session')
const flash = require('express-flash')
const logger = require('morgan')
connectDB = require('./config/database')
const mainRoutes = require('./routes/main')


require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection})
    })
)

app.use(passposrt.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}`)
})