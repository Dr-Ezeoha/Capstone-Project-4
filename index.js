import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { render } from "ejs";


const app=express(); //express object
const port = 3000;  //port 
const baseULR="https://v2.jokeapi.dev/joke/";  //baseURL of the JokeAPI

app.use(express.static("Public")); //to ref the static files

app.use(bodyParser.urlencoded({ extended: true }));  //ref front-end activities


//index page route
app.get("/", (req, res) => {
  res.render("index.ejs");
});


//index page routing through the /any jokes
app.get('/any', async(req,res)=>{
    try{
    const result=await axios.get(baseULR+"any");
    res.render("index.ejs", {joke:result.data.setup});
    } catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

//index page routing through the /christmas jokes
app.get('/christmas', async(req,res)=>{    
    try{
        
        const result=await axios.get(baseULR + "christmas");
        res.render("index.ejs",  {joke:result.data.setup });
        
    } catch(error){
        console.log(error.response.data);
        res.status(500); //server error code
    }
});


//index page routing through the /dark jokes
app.get('/dark', async(req,res)=>{
    try {
        const result=await axios(baseULR+"dark");
        res.render("index.ejs",{
            joke:result.data.setup
        });
    }catch(error){
    }
});


//index page routing through the /misc jokes
app.get('/misc', async(req,res)=>{
    try {
        const result=await axios(baseULR+"misc");
        res.render("index.ejs",{
            joke:result.data.setup
        });
    }catch(error){
    }
});

//index page routing through the /programming jokes
app.get('/programming', async(req,res)=>{
    try {
        const result=await axios.get(baseULR+"programming");
        res.render("index.ejs", {joke:result.data.setup});
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});


//index page routing through the /pun jokes
app.get('/pun', async(req,res)=>{
    try {
        const result=await axios.get(baseULR+"pun");
        res.render("index.ejs", {joke:result.data.setup});
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});


//index page routing through the /spooky jokes
app.get('/spooky', async(req,res)=>{
    try {
        const result=await axios.get(baseULR+"spooky");
        res.render("index.ejs", {joke:result.data.setup});
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});


//activating the server on port 3000
app.listen(port,()=>{
    console.log(`Server is up and running on, ${port}.`);
})