const koa = require('koa');
const logger = require('koa-logger')
const app = new koa();

// 通过  koa-compose   尾递归的形式执行中间件函数的顺序   洋葱模型   从里往外去执行
const mid1 = async (ctx, next) => {
  ctx.body = 'hi';
  await next();
  ctx.body =  ctx.body + 'there';
}
const mid2 = async (ctx, next) => {
  ctx.body = 'hi';
  await next();
}
const mid3 = async (ctx, next) => {
  ctx.body = 'hi';
  //await next();
}
app.use(logger());
app.use(mid1);
app.use(mid2);
app.use(mid3);

app.listen('3000');


// koa

//  接受http请求   解析   响应
   
//  中间件    上下文