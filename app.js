var express = require('express')
var app = express()

app.set('view engine', 'pug')

var futbolistasModule = require('./modules/futbolistasModule');

// greeter.hello("Monkey");
// greeter.bye("Steven");

app.get('/', function (req, res) {
  res.render('index', { message: 'Pasión por el fútbol'})
})

app.get('/futbolistas', function (req, res) {
  res.render('futbolistas', { message: 'Futbolistas', futbolistas: futbolistasModule.getAll() })
})

app.get('/futbolistas/:futbolistaId', function (req, res) {
  res.render('futbolista', { futbolista: futbolistasModule.getById(req.params.futbolistaId) })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
