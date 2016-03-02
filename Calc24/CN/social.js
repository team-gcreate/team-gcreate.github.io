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

// scoreModel.player = "";
// scoreModel.email = "";
// scoreModel.l10 = 0;
// scoreModel.l11 = 0;
// scoreModel.l12 = 0;

// obj.l10 = 0;
// obj.l11 = 0;
// obj.l12 = 0;
// obj.l13 = 0;
// obj.l14 = 0;
// obj.l15 = 0;
// obj.l16 = 0;
// obj.l17 = 0;
// obj.l18 = 0;
// obj.l19 = 0;
//
// obj.l20 = 0;
// obj.l21 = 0;
// obj.l22 = 0;
// obj.l23 = 0;
// obj.l24 = 0;
// obj.l25 = 0;
// obj.l26 = 0;
// obj.l27 = 0;
// obj.l28 = 0;
// obj.l29 = 0;
//
// obj.l30 = 0;

// for ( var attr in obj) {
// scoreModel[attr] = obj[attr];
// }

function saveScore(str) {
	console.log('save Score:', str);
	var obj = eval('(' + str + ')');

	var ScoreModel = Parse.Object.extend("T_MathCalculate");
	var query = new Parse.Query(ScoreModel);
	query.equalTo("email", obj.email);

	// alert("Input:" + JSON.stringify(obj));

	query.find({
		success : function(results) {
			var scoreModel = new ScoreModel();
			if (results.length > 0) {

				for (var i = 0; i < results.length; i++) {
					var object = results[i];
					object.save(null, {
						success : function(object) {
							for ( var attr in obj) {
								object.set(attr, obj[attr]);
							}
							// alert("Updated to" + JSON.stringify(object));
							console.log("Updated to" + JSON.stringify(object));
							object.save();
						},
						error : function(object, error) {
							alert("Error");
						}
					});
				}

			} else {
				var testObject = new ScoreModel();
				testObject.save(obj).then(function(object) {
					// alert("yay! it worked");
				});

			}
		},
		error : function(error) {
			alert("Error: " + error.code + " " + error.message);

		}
	});

}