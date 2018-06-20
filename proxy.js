/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/6/15
 * Time: 17:14
 */

var express = require('express');
var proxyMiddleWare = require("http-proxy-middleware");
var proxyPath = "http://sycs.dashouzhang.org:80";  //目标后端服务地址
var proxyOption ={target:proxyPath,changeOrigoin:true};
var app = express();

app.use(express.static("./dist"));  //静态资源目录

app.use("/",proxyMiddleWare(proxyOption))   //这里要注意"/" 是匹配的路由,它会将匹配的路由进行转发，没匹配到的就不会转发。(写成'/'就是说所有路由都可以访问)
app.listen(8000);
