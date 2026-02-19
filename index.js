const fs=require('fs');
/*fs.writeFile("./a.txt","abes college is",() => { });
fs.readFile("./a.txt","utf-8",(err,result) => { 
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result);
    } 
});*/
//fs.cpSync("./a.txt","./.txt");
//fs.unlinkSync("./a.txt");
const os=require('os');
console.log("platform",os.platform());
console.log("userinfo,",os.userInfo());