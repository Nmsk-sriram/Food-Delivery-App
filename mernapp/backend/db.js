// const mongoose = require('mongoose');
// const mongoURI='mongodb+srv://gofood:Sriram@56@cluster0.asu2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const mongoDB=()=>{mongoose.connect(mongoURI,()=>{
//     console.log("connected");
// });
// }

// module.exports=mongoDB;


const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Sriram%4056@cluster0.asu2y.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';



// const mongoDB=async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//         if(err) console.log("---",err)
//         else{
//            console.log("connected");
//            const fetched_data=await mongoose.connection.db.collection("food_items");
//            fetched_data.find({}).toArray(async function(err,data){
//             const foodCategory=await mongoose.connection.db.collection("foodCategory");
//             foodCategory.find({}).toArray(function(err,catData){
//                  if(err) console.log(err);
//             else{
//                 global.food_items=data;
//                 global.foodCategory=catData;
//             }

//             })
//             // if(err) console.log(err);
//             // else{
//             //     global.food_items=data;
//             // }
//            })
//         }
//     });
// }



const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');

    const fetchedData = await mongoose.connection.db.collection('food_items').find({}).toArray();
    global.food_items = fetchedData;

    const foodCategoryData = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
    global.foodCategory = foodCategoryData;

    console.log('Data fetched and stored globally');
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching data:', error);
    process.exit(1);
  }
};

module.exports = mongoDB;






















module.exports = mongoDB;

