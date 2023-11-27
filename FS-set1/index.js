const fs = require('fs');

fs.readFile('./files/lorem.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log('data',data); 
    console.log('data',data.toString()); 

    
})


fs.writeFile('./files/reply.txt','nice to meet u ',(err)=>{
    if (err) throw err;
    // console.log('data',data); 
    console.log('datawrote'); 

    
})



process.on('uncaughtException', err =>{
    console.log(`There was an uncaught error in the exception ,${err}`);
    process.exit(1);
} )