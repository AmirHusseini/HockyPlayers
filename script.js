const url = 'https://hockeyplayers.systementor.se/amir/player';
const deleteIcon = "<i class='bx bx-folder-minus bx-sm important'></i>";  
const editIcon = "<i class='bx bx-edit bx-sm important'></i>";
const sectionList = document.getElementById('sectionList')
const sectionNew = document.getElementById('sectionNew')
const sectionEdit = document.getElementById('sectionEdit')
const AddPlayerForm = document.getElementById('addform');
const cancelbtn = document.getElementById('cancelButton');
const cancelbt = document.getElementById('cancelButto');
const listLink = document.getElementById('listLink')

let CurrentPlayerId;

//Lägg till ny spelare
if (AddPlayerForm) {
  AddPlayerForm.addEventListener('submit', async function (event) {
        
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const plainData = Object.fromEntries(formData.entries());
    const plainDataJson = JSON.stringify(plainData);
    
    const result = await fetch(url, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
      body: plainDataJson,
    })
      .then(response => {showSection('sectionList'); window.location.replace("/");})
      .catch((error) => console.log(error));
    });
    
  //Cancel
  cancelbtn.addEventListener("click", function cancel() {
    window.location.replace("/");
  });
}

//redigering länk
const createEditLink = (id) =>{
  let link = document.createElement("a");
  link.href = "#";
  link.addEventListener("click", ()=> {
      idplayerload(id);
      showSection('sectionEdit');
  });           
  link.innerHTML = editIcon;  
  return link;
}

//Hämta alla spelare och visa i tabel
document.addEventListener('DOMContentLoaded', async function(){
  
  showSection('sectionList');  

  fetch(url)
    .then(response => {return response.json()})
    .then(function (data){
        const tbody = document.getElementById("tbody");                         
          
        for (const player of data) {        
          const row = tbody.insertRow();   
          const editTd = row.insertCell();
          editTd.append(createEditLink(player.id));
          
          for (const key in player) {
              if (key !== "id") {
                row.insertCell().innerText = player[key];
              }
          }
          row.insertCell().innerHTML = deleteIcon;                    
        }
    });
      
})

//Sortera tabel 
function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";

  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[n].innerHTML.toLowerCase();
      y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML.toLowerCase();
      
      if (n == 2 || n == 3) {
        x = parseInt(x);
        y = parseInt(y);
      }
      if (dir == "asc") {
        if (x > y) {
          
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++;
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  }

//Sök funktion
function myFunction() {
let input, filter, table, tr, td, i, txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
    }       
}
}  

//Updatera Spelare
const UpdateForm = document.getElementById("upform");

//get id of player from index.html

if (UpdateForm) {
  UpdateForm.addEventListener("submit", async function (event){
    
    id = CurrentPlayerId;
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    const plaindata= Object.fromEntries(data.entries());
    const dataAsJson = JSON.stringify(plaindata);

    fetch("https://hockeyplayers.systementor.se/amir/player/"+ id, {
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        method: "PUT",
        body: dataAsJson       
        }).then(response => window.location.replace("/"))
        .catch((error) => console.log(error));
});

cancelbt.addEventListener("click", function cancel() {
  window.location.replace("/");
});
}

//Load Player
function idplayerload(id){
  
  fetch(url)
  .then((response => {return response.json()}))
  .then(function (data){ 
   
      for (const player of data) {        
          
        if(player.id == id){
          document.getElementById("namne").value = player.namn;
          document.getElementById("jerseye").value = player.jersey;
          document.getElementById("agee").value = player.age;
          document.getElementById("borne").value = player.born;
          CurrentPlayerId = player.id;
        }                                  
      }       
     
  }).then(data => {return CurrentPlayerId })
  .catch((error) => console.log(error));
}



function showSection(sectionsId){
  if(sectionsId == 'sectionList'){
      sectionList.style.display = "block";
      sectionNew.style.display = "none";
      sectionEdit.style.display = "none";
  }
  else if(sectionsId == 'sectionNew'){
      sectionList.style.display = "none";
      sectionNew.style.display = "block";
      sectionEdit.style.display = "none";
  }
  else if(sectionsId == 'sectionEdit'){
      sectionList.style.display = "block";
      sectionNew.style.display = "none";
      sectionEdit.style.display = "block";
      sectionList.style.opacity= 0.2;
  }
}

newLink.addEventListener("click",()=>{ 
  showSection('sectionNew');    
});
