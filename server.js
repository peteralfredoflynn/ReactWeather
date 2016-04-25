var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;


// middleware
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next();
  }
});

app.use(express.static('public'));

// app.listen takes 2 args, thes server port, and a function that gets called once the server is up
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
