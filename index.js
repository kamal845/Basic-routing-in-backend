const express=require('express');
const app = express();
const port=3000;
const path=require('path');
app.set('view engine', 'ejs');
app.get('/new', (req, res) => {
    res.render(path.join(__dirname, './views', '/new.ejs')); // Assuming new.ejs is located in the public folder
});

app.get('/old',(req,res)=>{
res.send("this is old page. i hope you liked it");
});

/// rendering 
app.get('/old/special',(req,res)=>{
    res.render("special");
   });

app.get('/great',(req,res)=>{
    res.render('great');
})

app.listen(port,(req,res)=>{
console.log("server is started on port no.3000 thank you");
})