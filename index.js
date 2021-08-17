var createError = require('http-errors');
const express = require('express')
const cors = require('cors')
const session = require('express-session')

const adm = require('./router/adm')
const cliente = require('./router/cliente')
const premier = require('./router/premier')
const planilha = require('./router/planilha')

const app = express()

app.use(session({
    secret: '3234japassou-desabado',
    resave: true,
    saveUninitialized: true
}));

app.use(cors())
app.use(express.json())

app.use('/adm', adm)
app.use('/cliente', cliente)
app.use('/planilha', planilha)
app.use('/premier', premier)


app.listen(3000,()=>{
    console.log("Aplicação rodando na porta 3000")
})

app.use(session({
    secret: '3234japassou-desabado',
    resave: true,
    saveUninitialized: true
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

app.get('/',(request,response)=>{
    response.send("Hello world")
 })

 module.exports = app