const mongoose = require('mongoose');
const mongoURI="mongodb+srv://shantanu22:chiku2201@cluster0.5owjrww.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err)
        {
            console.log("...",err);
        }
        else{
            console.log("Connected");
            const fetchedData=await mongoose.connection.db.collection("food_items");
            fetchedData.find({}).toArray(async function(err,data){
                const foodCategory=await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        global.food_items=data;
                        global.foodCategory=catData;
                    }
                })
                // if(err)
                // {
                //     console.log(err);
                // }
                // else{
                //     global.food_items=data;
                    
                // }
            })
        }
        
    });
}

module.exports=mongoDB;
