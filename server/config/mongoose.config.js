const mongoose = require('mongoose');

mongoose.connect('url of mongodb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then( () => 
		 console.log('Established a connection to the database!'))
	.catch( err => 
		  console.log('Something went wrong when connecting with the database!', err));