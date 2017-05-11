const employeeRouter = require('./employee');

exports.routes = app => {
    app.use('/employee', employeeRouter);
}
