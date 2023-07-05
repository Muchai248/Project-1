///title deed images
//title(name of company)
//ratings
///year(duration)
//sign up button

const url="http://localhost:3000/housing"

//DOM manipulation

const modal = document.getElementById('id1');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






//Event listers






//communicating with the server


let titledeed=[]



async function fetchData(){
    const response = await fetch("http://localhost:3000/housing")
    const post=document.getElementById(post);

    const data = await response.json();
    fetchData()
    .then(()=>{})
    .catch((e)=>{
        console.log(e)
    })
    
return response.json();
}

document.getElementById("post").innerHTML


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
}


function putData(e){
    const password=document.getElementById("pass").value
    const emailName=document.getElementById("mail").value
    const data={
        "name":emailName,
        "password":password
    }


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











