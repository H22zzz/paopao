const Koa=require("koa");
const bodyParser=require("koa-bodyparser");
const parameter = require("koa-parameter");
const error=require('koa-json-error');
const staticMiddleware=require('koa-static');

const cartRoutes=require("./routes/cart");

const auth = require("./routes/auth");
const user = require("./routes/user");


const app=new Koa();

//处理错误
app.use(error({
    postFormat(error,{stack,...info}){
        return info;
    }
}));

//处理post请求参数
app.use(bodyParser());

// 验证参数
parameter(app);

//处理静态资源
app.use(staticMiddleware('./'));


//处理购物车请求
app.use(cartRoutes.routes()).use(cartRoutes.allowedMethods());

app.use(auth.routes()).use(auth.allowedMethods());
app.use(user.routes()).use(user.allowedMethods());



module.exports=app;