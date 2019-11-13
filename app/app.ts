import { Request, Response } from "express-serve-static-core";

var express = require('express');
var app = express();

app.get('/', function(req: Request,res: Response){
    res.send('Hello World');
});

app.listen(9299, function(){
    console.log('Example app listening on port 9299');
})