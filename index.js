/// <reference path="./typings/index.d.ts" />
"use strict";
const http = require("http");
const fs=require("fs");
const koa = require("koa");
const app = new koa();
const router = require('koa-router');
const Router=new router();
let resdata="";
// http.get('http://m.pppcar.com/v0/index/queryIndexPublicElement',(res)=>{
//   res.on("data",data=>resdata+=data);
//   res.on("end",()=>{});
// });
Router.get("/",ctx=>{
  ctx.body="<h1>123</h1>";
});
Router.get("/Users",ctx=>{
  ctx.body="Users";
})
// app.use(ctx=>{
//   ctx.body="江波";
// })
app.use(Router.routes());
// app.use(Router.allowedMethods());
app.listen(8085);


// http.createServer((req,res)=>{
//   res.end(resdata);
// }).listen(8085,"127.0.0.1");