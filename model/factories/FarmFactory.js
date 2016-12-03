"use strict";

app.factory("MushroomFarm", function($http, FBCreds) {

	let getFarm = () => {

		let farm = [];
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/mushrooms.json`)
			.success((mushroomObject) => {
				let mushroomObject = mushroomCollection;
				Object.keys(mushroomCollection).forEach((element) => {
					mushroomCollection[element].id = element;
					farm.push(mushroomCollection[element]);
				});
			})
			resolve(farm);
			
		})
		.error((error) => {
			reject(error);
		});

	}

return {getFarm};
});

