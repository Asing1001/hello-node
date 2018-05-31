const express = require('express');
const app = express()

function middleWare1(req, res, next){
    console.log(req.url);
    next()
}

app.use(middleWare1);

app.use('/*', function(req, res, next){
    res.send("aaa")
    res.end()
})

app.listen(8082, ()=>{
    console.log("listen on 8082")
})