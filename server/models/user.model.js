const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	email: {
		type: String,
		required: [ true, 'Email is required!'],
		// use regex to validate email addresses 
		validate: {
			validator: function(val){
				return /^([w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val);
			},
			message: "Please enter a valid email address"
		}
	},
	password: {
		type: String
	}, {timestamps: true}
})