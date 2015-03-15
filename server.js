// =================================
// MODULE DEPENDENCIES
// =================================
var express        = require('express');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cliColor       = require('cli-color');
var app            = express();

// Controller vars.
var site           = require('./controllers/site');

module.exports = app;

// =================================
// CONFIG
// =================================

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets'));

// =================================
// ROUTING
// =================================

app.get('/', site.index);

// =================================
// BOOSTRAP APP
// =================================

if (!module.parent) {
  app.listen(3000);
  console.log(cliColor.green('Started on port 3000'));
}