const nameRegEx = /^[a-zA-Z]{3,16}$/;
const emailRegEx =
  /^[a-zA-Z0-9.!@#$%^&*()_+=`~]{3,}[@][a-zA-Z]{3,}[.][a-zA-Z]{2,3}$/;
const mobileRegEx = /^[9,8,7,6][0-9]{9}$/;
const passwordRegEx =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[.,!@#$%^&*()-=+`!])[a-zA-z0-9.,!@#$%^&*()-=+`!]{8,16}$/;

export function validateFunction(inputid, value) {
  let error = {};

  //   fullname validation
  if (inputid === "fullname") {
    if (value === "") {
      error[inputid] = `${inputid} is required`;
    } else if (!nameRegEx.test(value)) {
      error[inputid] = `Please enter valid ${inputid}`;
    } else {
      error[inputid] = "";
    }
  }

  //   email validation
  if (inputid === "email") {
    if (value === "") {
      error[inputid] = `${inputid} is required`;
    } else if (!emailRegEx.test(value)) {
      error[inputid] = `Please enter valid ${inputid}`;
    } else {
      error[inputid] = "";
    }
  }

  //   email validation
  if (inputid === "phone") {
    if (value === "") {
      error[inputid] = `${inputid} is required`;
    } else if (!mobileRegEx.test(value)) {
      error[inputid] = `Please enter valid ${inputid}`;
    } else {
      error[inputid] = "";
    }
  }

  //   email validation
  if (inputid === "password") {
    if (value === "") {
      error[inputid] = `${inputid} is required`;
    } else if (!passwordRegEx.test(value)) {
      error[inputid] = `Please enter valid ${inputid}`;
    } else {
      error[inputid] = "";
    }
  }

  return error;
}
