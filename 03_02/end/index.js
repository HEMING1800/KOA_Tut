const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.date = Date();

// response
app.use(ctx => {
    // use the state
    ctx.state.user = 'Manny Henri';
    // print out name with date
    ctx.body = `Hello ${ctx.state.user} on ${ctx.date}`;
});

app.listen(3001);
