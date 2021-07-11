const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
//const connectDB = require('./config/database')
const connectDB = require('./config/localdb.js')
const mainRoutes = require('./routes/main')
const storeRoutes = require('./routes/store')
const itemRoutes = require('./routes/item')
const flash = require('express-flash')

require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(flash())
app.set('views', path.join(__dirname, '/views/pages'));

//app.use(logger('dev'))

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/stores', storeRoutes)
app.use('/items', itemRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}`)
})