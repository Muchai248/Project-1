///title deed images
//title(name of company)
//ratings
///year(duration)
//sign up button




const url="http://localhost:3000/housing"

//DOM manipulation

const modal= document.getElementById('id1');
//window.onclick = function(event) {
 /// if (event.target == modal) {
 // modal.style.display = "none";
 // }
//}






//Event listers
fetch("http://localhost:3000/housing")
.then(response => response.json())
.then(housingData => {
  console.log(housingData);
  const container = document.getElementById("one");

// Iterate over the housing data and generate HTML for each housing object
housingData.forEach(housing => {
  console.log(housing)
  // Create a new div element for each housing object
  const housingDiv = document.createElement("div");

  // Set the HTML content of the div using the housing object properties
 
  container.innerHTML +=`
  <div class="card col-3 m-2">
  <img src="${housing.poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${housing.name}</h5>
    <p class="card-text">${housing.description}</p>
    <p>Years: ${housing.years}</p>
    <a class="btn btn-primary" id=${housing.id} onclick="myrate(event)">Rate Us</a>

  </div>
</div>

  `;
});

// Create a function to handle the rating

function submitData(e){
    const password =document.getElementById("pass").value
    const emailName =document.getElementById("mail").value
    const data ={
        "name":emailName, 
        "password":password
    }


    fetch("http://localhost:3000/Users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    modal.style.display = "none";
   
}



function putData(e){
    const password=document.getElementById("pass").value
    const emailName=document.getElementById("mail").value
    const data={
        "name":emailName,
        "password":password
    }

    fetch("http://localhost:3000/Users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    modal.style.display = "none";
    
}

})




function myrate(e){
  var rate = prompt("Rate us here:");
 fetch(`http://localhost:3000/housing/${e.target.id}`)
 .then(resp=>resp.json())
 .then(data=>{
  data["ratings"]=rate
  fetch(`http://localhost:3000/housing/${e.target.id}`,{
    method:"PATCH",
  headers:{
       "Content-Type":"application/json"
   },
    body:JSON.stringify({rating: rate})
})
 })
  if (rate == null || rate >5 || rate=="") {
    document.getElementById("msg").innerHTML =prompt("Please enter your rate again");
  }
  else
  {
     
    document.getElementById("msg").innerHTML =alert("Thank you for rating Us!");
  }


}



function show() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
}

function hide() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
  if (pwShown == 0) {
      pwShown = 1;
      show();
  } else {
      pwShown = 0;
      hide();
  }
}, false);
  