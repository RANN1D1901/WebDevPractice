import express from "express";
var mongoose = require('mongoose');
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";
import jsonwebtoken from "jsonwebtoken";


const app = express();
app.listen(3000);

mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//JWT setup......
app.use((req,res,next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT'){
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1],'RESTFULAPIs', (err,decode)=>{
            console.log(req.headers.authorization)

            if(err) req.user = undefined;
            req.user = decode;
            console.log(req.user)
            next();
        })
    }else{
        req.user = undefined;
        next();
    }
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);



app.get("/",(req,res)=>{
    res.send(("Hello:Nodejs"))
});
