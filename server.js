var express = require('express');

//create our app
var app = express();

app.use(express.static('public'));

// app.listen takes 2 args, thes server port, and a function that gets called once the server is up
app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});
