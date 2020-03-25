// Real Basic AJAX Call :)
var request = new XMLHttpRequest();
request.open('GET', 'https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV', true);
request.onload = function () {
	var data = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400) {
		console.log(data);
	} else {
		console.log('error');
	}
};
request.send();
