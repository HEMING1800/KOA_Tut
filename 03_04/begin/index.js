const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.date = Date();

// response
app.use(ctx => {
    // use the state
    ctx.state.user = 'Manny Henri';
    // request object usage
    let from = ctx.request.method
    // print out name with date
    ctx.body = `Hello ${ctx.state.user} on ${ctx.date}`;
    console.log(from);
});

app.listen(3001);
