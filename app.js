/*
* @author:dbxiao
* @data:2014-11-11
* @module:app
* @function:nodeJS主程序，开启服务执行：node app
*/
////////////////////////////////////////////////
//============  module 引入    =================//
////////////////////////////////////////////////
//提供WEB框架服务
var express = require('express');
//提供全局配置
var globalConfig = require('./config/globalConfig');
//提供WEB PATH服务
var path = require('path');
//HTTP
var http = require('http');
//提供路由服务
var router = require(GLOBAL.nodeConf.ROUT_DIR + 'router');
//实例化app服务
var app = express();
// //socket
// var server = http.createServer(app).listen(GLOBAL.nodeConf.PORT);
// //io
// io = require('socket.io').listen(server);
// 
// var socketIO = require(GLOBAL.nodeConf.EXT_DIR + '/socketIO/socketIO');
// socketIO(io);

////////////////////////////////////////////////
//=================app配置====================//
////////////////////////////////////////////////
//set template
app.set('views', GLOBAL.nodeConf.VIEW_DIR);
//app.engine('html', engine);
app.engine('html', require('ejs').__express);
app.set('view engine', GLOBAL.nodeConf.VIEWS_ENGINE);
//express 静态文件目录定义STATIC_DIR
app.use("/"+GLOBAL.nodeConf.RES, express.static(GLOBAL.nodeConf.STATIC_DIR));
//自定义路由
app.use(router);
//端口 (和socket合并开启端口监听)
app.listen(GLOBAL.nodeConf.PORT);

module.exports = app;
