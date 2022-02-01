const express=require('express');
const app=express();
const PORT=1000;

app.set('view engine','ejs');  //using ejs as view engine
app.set('views','./views');      //taking from views folder

app.use(express.urlencoded());
//calling the folder 
 app.use(express.static('assests'));

// checking error for established PORT
app.listen(PORT,function(err) {
    if(err) {
        console.log('Error found in running PORT ');
    }
    console.log(`Server is running on PORT ${PORT}`);
});


app.get('/',function(req,res) {    
return res.render('home');      //rendering on main page 
}); 