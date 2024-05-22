const express = require('express') ;
const path = require('path');
const app = express() ;

// setting up parsers for  forms
app.use(express.json());
app.use(express.urlencoded({extended :true}));

// setting up public static files
app.use(express.static(path.join(__dirname,"public")))

// setting up ejs for ejs pages
app.set("view engine" , "ejs") ;

app.get("/",(req,res)=>{
    res.send("Working")
})

// dynamic routing
app.get("/profile/:username/:age",(req,res)=>{
    let username = req.params.username ;
    let age = req.params.age ;
    res.render("index",{username , age});
})

app.listen(3000);