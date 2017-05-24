const employeeRouter = require('./employee');
const mailDetailsRouter = require('./mailDetails');

exports.routes = app => {
    app.use('/employee', employeeRouter);
    app.use('/mailDetails', mailDetailsRouter);
}
