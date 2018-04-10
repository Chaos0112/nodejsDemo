var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require("path");
var url = require('url');

var webPath = path.join(__dirname, 'web');
var wordir  = path.resolve(".");//工作区路径

var server = http.createServer(function (request, response) {
    // console.log(request.method+": "+request.url);

    var pathName = url.parse(request.url).pathname;

    if(pathName.endsWith('jpg')){//图片资源
        response.writeHead(200);
        var imgPath = path.join(webPath, pathName);
        console.log(imgPath);
        fs.createReadStream(path.join(webPath,pathName)).pipe(response);
    } else if (pathName.endsWith('ico')){
        response.writeHead(200);
        fs.createReadStream(path.join(webPath, "images/share_wechat.png")).pipe(response);

    }else{//h5
        response.writeHead(200);
        fs.createReadStream('web/hand_mobile.html').pipe(response);
    }

    console.log();

    
});

server.listen(8080);
console.log("server is running at http//:127.0.0.1:8080");