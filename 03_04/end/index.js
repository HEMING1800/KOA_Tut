const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.date = Date();
app.context.userData = {
    'first': 'Manny',
    'last': 'Henri',
}

// response
app.use(ctx => {
    // use the state
    ctx.state.user = 'Manny Henri';
    // request object usage
    let from = ctx.request.method
    // print out name with date
    ctx.response.body = `Hello ${ctx.userData.first} ${ctx.userData.last}`;
    // ctx.response.body = ctx.userData.first;
    console.log(from);
});

app.listen(3001);
