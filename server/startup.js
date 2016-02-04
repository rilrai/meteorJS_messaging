Meteor.startup(function(){
	if (!References.findOne({_id:'1'})) {
		References.insert({
			_id : '1',
			text : 'Messages can be sent by pressing the Enter key.'
		})
	};

	if (!References.findOne({_id:'2'})) {
		References.insert({
			_id : '2',
			text : 'The message box has not the best implementation, still I decided that html code is not the most important thing in this task. Hope it\'s true.',
		})
	};

	// if (!References.findOne({_id:'3'})) {
	// 	References.insert({
	// 		_id : '3',
	// 		text : 'It took a bit more than 2 evenings.'
	// 	})
	// }
});
