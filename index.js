const express = require('express');
const port = 8000;


const app = express();

app.listen(port,function(err){
            if(err)
            {
                console.log("Error in port listening",err);
                return;
            }
            return console.log("Server is fired up at port:",port);
});