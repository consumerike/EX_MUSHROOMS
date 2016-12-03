"use strict";
var app = angular.module("Toad", ["ngRoute"]);


app.run( ($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.key, 
		authDomain: creds.authDomain

	};

	firebase.initializeApp(authConfig);
})


