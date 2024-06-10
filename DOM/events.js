// console.log("events.js");

const heading = document.getElementById("heading");
const container = document.getElementsByClassName("container");
const formsubmit = document.getElementById("formsubmit");
console.log(container);

let obj = {
  company: "GOOGLE",
};
let errorObj = {};

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
  // console.log(e.target.id, e.target.value);

  if (!errorObj[`${e.target.id}-err`]) {
    obj = { ...obj, [e.target.id]: e.target.value };
  }

  console.log(obj);

  // const fullnamee = document.getElementById("fullname").value;
  // const emaill = document.getElementById("email").value;
  // const passwordd = document.getElementById("password").value;
  // const phonee = document.getElementById("phone").value;
  // obj.fullname = fullnamee;
  // obj.email = emaill;
  // obj.phone = phonee;
  // obj.password = passwordd;

  //   console.log(fullname, email, password, phone);
};

function submit(e) {
  e.preventDefault();
  console.log(e);
  console.log(obj);
  const container = document.createElement("div");
  // const maincontainer = document.getElementById("maincontainer");
  // maincontainer.appendChild(container);
  const h1 = document.createElement("h2");
  h1.innerText = obj.fullname;
  container.appendChild(h1);
  // localStorage.setItem("user1", JSON.stringify(obj));
  // localStorage.clear();
  // localStorage.removeItem("user1");
}

formsubmit.addEventListener("submit", submit);

//  DOM -> Document object model
//  getElementById()
//  getElementsByClassName()
//  getQuerySelector()
//  getQuerySelectorAll()
//  getElementsByTagName()

const handleBlur = (e) => {
  const fullnameErr = document.getElementById("fullanme-err");
  const emailErr = document.getElementById("email-err");

  const { id } = e.currentTarget;
  const { value } = e.target;

  if (id === "fullname") {
    if (value === "") {
      errorObj = { ...errorObj, [id]: "Fullname is required" };
    } else {
      errorObj = { ...errorObj, [id]: "" };
    }
    fullnameErr.innerText = errorObj[id];
  }
  if (id === "email") {
    if (value === "") {
      errorObj = { ...errorObj, [id]: "Email is required" };
    } else {
      errorObj = { ...errorObj, [id]: "" };
    }
    emailErr.innerText = errorObj[id];
  }
};
