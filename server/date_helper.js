Meteor.methods({
	getDate: function() {
		date = new Date();
		datetime = date.getTime();

		return datetime;
	}
});