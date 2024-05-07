// console.log("events.js");

const heading = document.getElementById("heading");
const container = document.getElementsByClassName("container");
const formsubmit = document.getElementById("formsubmit");
console.log(container);

// let obj = {
let fullname = "";
let email = "";
let password = "";
let phone = "";
// };

const clickHandler = () => {
  console.log(container[0].style.backgroundColor);
  if (container[0].style.backgroundColor === "") {
    heading.style.color = "red";
    container[0].style.backgroundColor = "black";
  } else {
    heading.style.color = "";
    container[0].style.backgroundColor = "";
  }
};

const handleChange = (e) => {
  const fullnamee = document.getElementById("fullname").value;
  const emaill = document.getElementById("email").value;
  const passwordd = document.getElementById("password").value;
  const phonee = document.getElementById("phone").value;
  fullname = fullnamee;
  email = emaill;
  phone = phonee;
  password = passwordd;

  //   console.log(fullname, email, password, phone);
};

function submit(e) {
  e.preventDefault();
  console.log(e);
  console.log(fullname, email, phone, password);
}

formsubmit.addEventListener("submit", submit);

//  DOM -> Document object model
//  getElementById()
//  getElementsByClassName()
//  getQuerySelector()
//  getQuerySelectorAll()
//  getElementsByTagName()
