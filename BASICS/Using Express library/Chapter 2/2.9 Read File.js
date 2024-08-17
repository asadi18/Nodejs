const fs = require('fs')

fs.readFile('./test.json', (err,data)=>{
if(err){
return console.log(err)}
else{
let dataStr = JSON.parse(data)
 console.log(dataStr)
 console.log(dataStr.name)

}

})