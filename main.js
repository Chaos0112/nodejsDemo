// process.nextTick(function () {
//     console.log("nextTick callback!")
// })

// var hello = require('./hello');
// hello.greet('Michael');
// hello.goodbye('jack');

// console.log(typeof(window));


var fs = require("fs");

//data是Buffer 异步读取文件
fs.readFile('name.txt',function (error,data){
    if(error){
        console.log("readfile callback: read  File error");
    }else{
        console.log("readfile callback: "+data.toString('utf-8'));
    }
})
//同步读取文件
var txt = fs.readFileSync('name.txt','utf-8');
console.debug('sync file content：' + txt);

//写文件
var s = '满天都是小星星';
fs.writeFile("name.txt",s,function (error) {
    if(error){
        console.log("写入失败")
    }else{
        console.log("写入成功")
    }   
})

s = '一片两片三四片';
fs.appendFile("name.txt", s, function (error) {
    if (error) {
        console.log("写入失败")
    } else {
        console.log("写入成功")
    }
})
//获取文件信息
fs.stat("name.txt",function (error,stat) {
    if (error) {
        console.log("读取文件状态失败");
    }else{
        console.log("isFile: "+stat.isFile());
        console.log("isDirectory: "+stat.isDirectory());
        console.log("size: "+stat.size);
        console.log("birth time: "+stat.birthtime);
        console.log("modify time: "+stat.mtime);
    }
})

var crypto = require("crypto");

var hash = crypto.createHash("MD5");//crypto.createHash("SHA1")
hash.update("hello world");
hash.digest("hex");


var hMac = crypto.createHmac("sha256",'secert-key')