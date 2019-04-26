// 云函数入口文件
const cloud = require('wx-server-sdk');
const rq = require("request-promise");

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
 let isbn = event.isbn;
 let baseUrl = "https://api.jisuapi.com/isbn/query?appkey=6652ac7d565b7843&isbn=";
 let res = rq(baseUrl+isbn).then(html=>{
  return html;
 }).catch(err=>{
   console.log(err);
 })
 return res;
}