import express from "express";
import ejs from "ejs";

let posts=[];

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/Blog",(req,res)=>{
    res.render("edit.ejs");
});

app.post("/create", (req,res)=>{
    const newPost = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
};
    posts.push(newPost);

    res.send("Blog posted successfully!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});