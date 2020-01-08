$.getJSON('data.json', function(data) {
	var output = '<ul class="searchresults">';
	$.each(data,function(key, val) {
		output += '<li>';
		output += '<h2>' + val.name + '</h2>';
		output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="' + val.name + '" />';
		output += '<p>' + val.bio +'</p>';
		output += '</li>';
	});
	output += '</li>';
	$('#update').html(output);

})

//Отправка данных JSON на страницу