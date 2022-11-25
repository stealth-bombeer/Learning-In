const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Kunal123:codinggujjus@users.iuusecl.mongodb.net/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>
{
    console.log("Connection Sucessful With Database")
})
.catch((err)=>
{
console.log(err.message)
})
