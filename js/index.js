///title deed images
//title(name of company)
//ratings
///year(duration)
//sign up button

const url="http://localhost:3000/housing"

//DOM manipulation

const modal = document.getElementById('id1');
//window.onclick = function(event) {
  //if (event.target == modal) {
    //modal.style.display = "none";
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
  housingDiv.innerHTML = `
    <h2>${housing.name}</h2>
    <div>
    <img src="${housing.poster}" alt="Housing Poster">
    </div>
    <p>${housing.description}</p>
    <p>Years: ${housing.years}</p>
    <p>Rating: ${housing.ratingstars} stars</p>
    <div class="rating">
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
</div>

  `;

  // Append the div to the container element
  container.appendChild(housingDiv);
});

})







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

    
    modal.style.display = "none";

}


const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);











