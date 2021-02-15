const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.date = Date();
app.context.userData = {
    'first': 'Manny',
    'last': 'Henri',
}

// response
app.use(async (ctx) => {
    try {
        return ctx.response.body = await ctx.userData;
    } catch(error) {
        console.log(error);
    }
});

app.listen(3001);
