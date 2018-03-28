const userRouter = require('./user');
const playersRouter = require('./players');

exports.routes = app => {
    app.use('/user', userRouter);
    app.use('/cricket/players', playersRouter);
}
