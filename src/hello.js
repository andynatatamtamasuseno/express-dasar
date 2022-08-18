import express from "express";

const app  = express();

app.get('/', (req,res)=> {
    res.send("My web")
})


app.get('/home', (req,res)=> {
    res.send("Home Page")
})

app.listen(9000, ()=>{
    console.log("server started on port 9000");
})