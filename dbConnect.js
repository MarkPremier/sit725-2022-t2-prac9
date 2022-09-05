
const MongoClient = require('mongodb').MongoClient;

const uri =  "mongodb+srv://s222115089:Admin@mongotest.sidnbkn.mongodb.net/?retryWrites=true&w=majority";
let mongoClient = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });


mongoClient.connect((err,db) => {

     if(!err){
       console.log('Connected to MongoDB')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = mongoClient;



 




