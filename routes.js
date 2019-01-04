module.exports = function(app){

		const application = require('./routes/application');
		const users = require('./routes/users');
		const trips = require('./routes/trips');
		const pricing = require('./routes/pricing');
		const drone = require('./routes/drone');
		const trying = require('./routes/trying');

		app.use('/', application);
		app.use('/users', users);
		app.use('/trips', trips);
		app.use('/pricing', pricing);
		app.use('/drone', drone);
		app.use('/trying', trying);
    //other routes..
}