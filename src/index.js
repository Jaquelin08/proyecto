const express = require('express');
const req = require('express/lib/request');
const app = express();
const morgan = require('morgan');
//settings
app.set('port', process.env.PORT ||3000);
app.set('json spaces',2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/personajes',require('./routes/personajes'));
app.use('api/fuerza',require ('./routes/fuerza') );
//servidor inicial

app.listen(app.get('port'), ()=> {
    console.log ('server on port ${app.get (3000)}');
});