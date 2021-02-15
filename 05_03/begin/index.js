const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.userData = {
    'first': 'Manny',
    'last': 'Henri',
}

// response
app.use(async (ctx) => {
    ctx.response.body = ctx.userData;
});

// log
app.use(async (ctx, next) => {
    await next();
    const responseTime = ctx.response.get('X-Response-Time');
    console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
});

app.listen(3001);
