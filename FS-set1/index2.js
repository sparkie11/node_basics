const fsPromises = require('fs').promises;

const path = require('path');

const fileOps = async () => {
    try{
         const data = await fsPromises.readFile(path.join(__dirname,'files','lorem.txt'),'utf-8');
         console.log(data,'dataaa')
    }catch (err){
        console.log(err);

    }
}

// fs.readFile(path.join(__dirname,'files','lorem.txt'),'utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log('data',data); 
//     console.log('data',data.toString()); 

    
// })

fileOps();

// fs.writeFile('./files/reply.txt','nice to meet u ',(err)=>{
//     if (err) throw err;
//     // console.log('data',data); 
//     console.log('datawrote'); 

    
// })



process.on('uncaughtException', err =>{
    console.log(`There was an uncaught error in the exception ,${err}`);
    process.exit(1);
} )