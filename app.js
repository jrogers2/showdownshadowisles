/*
 * Module dependencies
 */
var express = require('express'),
	stylus = require('stylus'),
	nib = require('nib')
var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {
 res.render('index', { title : 'Home' } )
})
app.get('/streams', function (req, res) {
 res.render('streams', { title : 'Streams' } )
})
app.get('/tournaments', function (req, res) {
 res.render('tournaments', { title : 'Tournaments' } )
})
app.get('/teams', function (req, res) {
 res.render('teams', { title : 'Top Teams' } )
})
app.get('/tierlist', function (req, res) {
 res.render('tierlist', { title : 'Tier List' } )
})
app.get('/guides', function (req, res) {
 res.render('guides', { title : 'Guides' } )
})
app.get('/championstats', function (req, res) {
 res.render('championstats', { title : 'Champion Stats' } )
})
app.listen(3001)