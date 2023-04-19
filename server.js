//jshint esversion:6 //ignore warnings

const express = require("express");
const app = express(); //app- conventional word.

//"/" means; get a GETrequest from a browser-targeting this route.
//Then respond with the callback function.
app.get("/", function(request, response){   //to root homepage,
    response.send("<h1>Hello, World!</h1>") //send inside of ().
});

//make new request to "/contact" location.
app.get("/contact",function(req,res){
    res.send("Contact me: jiui0103@naver.com");
});

//It's possible to plan- setting up the code for 
//different routes.

app.get("/about",function(req,res){
    res.send("My name is Jiui Son, from SeoulTech Univ.");
});

app.get("/hobby",function(req,res){
    res.send("I love hanging with my friend!");
});

app.listen(3000, function(){  //localhost:3000
  console.log("Server started on port 3000.");
});

