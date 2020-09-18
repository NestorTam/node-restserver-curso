require('./confing/confing');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.send('getUsuario')
});

app.post('/usuario', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({ persona: body });
    }

});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
});

app.delete('/usuario', function(req, res) {
    res.send('deleteUsuario')
});

app.listen(process.env.port, () => { console.log('Escuchando el puerto  3000'); })


/*var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
*/