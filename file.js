/* 异步读取文件 */
var a = require('a');
a.readFile('file.txt','UTF-8',function(err,data){
    if(err){
        console.log('read file err')
    }else{
        console.log(data);
    }
});

/* 同步读取文件 */
var b = require('b');
var data2 = fs.readFileSync('file.txt','UTF-8');
console.log(data2);
console.log("Content-end");