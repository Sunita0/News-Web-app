const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const NewsModel = require("./model/news.js")
app.listen(3000,() => {});

app.get("/",(req,res) =>{
    res.json({name:"sunita"});
});
app.post("/api/addnews",async(req,res) =>{
    try{
        const news = await NewsModel.create(req.body);
        res.status(200).json(news);
        console.log(req.body);
    } catch (error){
        res.send(500);
    }
});
app.get("/api/news",async(req,res) =>{
    try{
        const news = await NewsModel.find({});
        res.status(200).json(news);
        console.log(req.body);
    } catch (error){
        res.send(500);
    }
});
app.get("/api/news/:id",async(req,res) =>{
    try{
        const { id } = req.params;
        const news = await NewsModel.findById(id);
        res.status(200).json(news);
        console.log(req.body);
    } catch (error){
        res.send(500);
    }
});
app.put("/api/news/:id",async(req,res) =>{
    try{
        const { id } = req.params;
        const news = await NewsModel.findByIdAndUpdate(id,req.body);
        if(!news){
            return res.status(404).json({message : " News Not Found "});
        }
        const updatenews = await NewsModel.findById(id);
        res.status(200).json(updatenews);
        
    } catch (error){
        res.send(500);
    }
});
app.delete("/api/news/:id",async(req,res) =>{
    try{
        const { id } = req.params;
        const news = await NewsModel.findByIdAndDelete(id,req.body);
        if(!news){
            return res.status(404).json({message : " News Not Found "});
        }
        const updatenews = await NewsModel.findById(id);
        res.status(200).json("Delete");
        
    } catch (error){
        res.send(500);
    }
});
mongoose
  .connect("mongodb+srv://SUNITA:Slfz66YExLqvHeUf@cluster0.4duyw.mongodb.net/")
  .then(() => {
    console.log("connected to DB");
  });
