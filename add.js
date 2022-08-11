// const url = "https://hockeyplayers.systementor.se/amir/player";


// exampleForm.addEventListener("submit", async function (event) {
// 	event.preventDefault();

// 	const form = event.currentTarget;
// 	const formData = new FormData(form);
// 	const plainData = Object.fromEntries(formData.entries());
// 	const plainDataJson = JSON.stringify(plainData);
	
// 	const result = await fetch(url, {
// 	  method: "POST",
// 	  headers: {
// 		"Content-Type": "application/json",
// 		Accept: "application/json",
// 	},
// 	  body: plainDataJson,
// 	})
// 	  .then(response => window.location.replace("/"))
// 	  .catch((error) => console.log(error));
//   });

//   cancelForm.addEventListener("click", function cancel() {
// 	window.location.replace("/");
// });