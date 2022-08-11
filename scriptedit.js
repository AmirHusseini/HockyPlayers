// const url = "https://hockeyplayers.systementor.se/amir/player";
// const UpdateForm = document.getElementById("upform");
// const cancelbtnup = document.getElementById("cancelButton");
// //get id of player from index.html
// const para = new URLSearchParams(window.location.search), id = para.get("id");

// UpdateForm.addEventListener("submit", async function (event){
//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     const plaindata= Object.fromEntries(data.entries());
//     const dataAsJson = JSON.stringify(plaindata);

//     fetch("https://hockeyplayers.systementor.se/amir/player/"+ id, {
//         headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//         },
//         method: "PUT",
//         body: dataAsJson       
//         }).then(response => window.location.replace("/"))
//         .catch((error) => console.log(error));
// });

// document.addEventListener('DOMContentLoaded', async function(){
//     fetch(url)
//     .then((response => {return response.json()}))
//     .then(function (data){ 
//         for (const player of data) {        
            
//           if(player.id == id){
//             document.getElementById("namn").value = player.namn;
//             document.getElementById("jersey").value = player.jersey;
//             document.getElementById("age").value = player.age;
//             document.getElementById("born").value = player.born;
//           }                                  
//         }       
//         console.log(id)
//     }).catch((error) => console.log(error));
// });

// cancelbtnup.addEventListener("click", function cancel() {
// 	window.location.replace("/");
//   });