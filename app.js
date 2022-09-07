 const express = require('express')
const app = new express()
const port = 4300
const routere = require ('./router')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('/class/lecture7/studentsloginassignment' , (req, res)=>{
res.send('This app is running on server');
})
app.use('/class/lecture7/studentsloginassignment/route',routere)
