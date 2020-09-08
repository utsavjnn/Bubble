const express = require('express');
const port = 8000;
const path = require('path');

const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.post('/create-task',function(req,res){
    Task.create({
        description:req.body.description,
        category:req.body.category,
        dueDate:req.body.dueDate
    },function(err,newTask){
        if(err)
        {
            return console.log("Couldnt put data into DB");
        }
        console.log('****',newTask);
        return res.redirect('back');
    });
})

app.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err)
        {
            console.log("There is error in fetchin from db!!");
            return;
        }
        return res.render('home',{
            title : "bubbleGum :-p",
            task_list : tasks
        })
    });
});

app.listen(port,function(err){
            if(err)
            {
                console.log("Error in port listening",err);
                return;
            }
            return console.log("Server is fired up at port:",port);
});