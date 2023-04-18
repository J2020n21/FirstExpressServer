//jshint esversion:6 //ignore warnings

const express = require("express");
const app = express(); //app- conventional word.

//GET request
app.get("/", function(request, response){   //to root homepage,
    response.send("<h1>Hello, World!</h1>") //send inside of ().
});

app.listen(3000, function(){  //localhost:3000
  console.log("Server started on port 3000.");
});

