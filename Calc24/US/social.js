var friendCache = {};

function login(callback) {
	console.log('login');
	FB.login(callback, {
		scope : 'email',
		return_scopes : true
	});
}

function loginCallback(response) {
	console.log('loginCallback', response);
	if (response.status != 'connected') {
		top.location.href = 'https://www.facebook.com/appcenter/digital_compute';
	}
}
function onStatusChange(response) {
	console.log('onStatusChange', response);
	if (response.status != 'connected') {
		login(loginCallback);
	} else {
		console.log('connected');
		onLogin();
	}
}
function onAuthResponseChange(response) {
	console.log('onAuthResponseChange', response);
}

function sendBrag(caption, callback) {
	FB.ui({
		method : 'feed',
		caption : caption,
		picture : 'http://www.friendsmash.com/images/logo_large.jpg',
		name : 'Checkout my Friend Smash greatness!'
	}, callback);
}

