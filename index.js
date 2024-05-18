const express=require('express');
const app = express();
const port=3000;
const path=require('path');
app.set('view engine', 'ejs');
app.get('/new', (req, res) => {
//dirname views ka matlab folder ka name or new ka matlab file ka name ayega.path require karna imp h.
res.render(path.join(__dirname, 'views', 'new')); // Assuming new.ejs is located in the public folder
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

// req.params
app.get('/:username',(req,res)=>{
let {username}=req.params;
res.send(`ye account ${username} ka hai`);
});
// req.params id
app.get('/:id',(req,res)=>{
    let {id}=req.params;
    res.send(`ye account ${id} ka hai`);
    });

//req.query
// app.get('/search',(req,res)=>{
//     let {q}=req.query;
//     if(!q){
//         res.send("aisi koi query nahi hai.");
//     }
//         res.send(`ye result ${q} ka hai`);
//         //route parameter :- http://localhost:3000/search?q= aanchal
// })

app.listen(port,(req,res)=>{
console.log("server is started on port no.3000 thank you");
})