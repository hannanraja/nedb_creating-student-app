const { Router } = require('express');
const express = require('express')
const router = express.Router();
const Datastore = require('nedb')
var db = new Datastore({ filename: 'database.db' , autoload: true });

router.get ('/name', async (req, res)=>{
    try{
db.find({},(err, doc) =>{
res.json({ names : doc[0].name})

})
    }
    catch(err){
res.status(500).json({
    message : "this failed"
})
    }
})

router.get ('/id', async (req, res)=>{
    try{
res.status(200).json({
    message: "THese are the ids"
})
    }
    catch(err){
res.status(500).json({
    message : "this failed"
})
    }
})
router.post('/postdata', async (req,res)=>{
try{
const savedata= await db.insert(req.body);
res.status(200).json({'message': "Data sent successfully"})
console.log(savedata)
}
catch{
    res.status(500).json({
        message : "this failed"
    })
}
});

module.exports = router; 