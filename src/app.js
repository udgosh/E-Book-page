const express = require("express")
const app = express()
const path = require('path')
const ejs = require('ejs')
const staticPath = path.join(__dirname+"/../public/")
const templatePath = path.join(__dirname+'/../templates/views')
// const partialPath = path.join(__dirname+'/../templates/partials')
const port = process.env.PORT || 3000;

app.set('view engine','ejs')
app.set('views',templatePath)
app.use(express.static(staticPath))
// ejs.registerPartials(partialPath)





app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/payment',(req,res)=>{
    res.render('payment')
});

app.listen(port,()=>{
    console.log('server is listening at http://localhost:3000');
})


