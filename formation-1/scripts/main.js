let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/popeye.png") {
    myImage.setAttribute("src", "images/olive.png");
  } else {
    myImage.setAttribute("src", "images/popeye.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Bienvenu " + myName;
  }
  
  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Bienvenu " + storedName;
  }
  
  myButton.addEventListener("click", function () {
    setUserName();
  });
  
  