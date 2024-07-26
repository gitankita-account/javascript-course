const nameRegEx = /^[a-zA-Z]{3,16}$/;
const emailRegEx =
  /^[a-zA-Z0-9.!@#$%^&*()_+=`~]{3,}[@][a-zA-Z]{3,}[.][a-zA-Z]{2,3}$/;
const mobileRegEx = /^[9,8,7,6][0-9]{9}$/;
const passwordRegEx =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[.,!@#$%^&*()-=+`!])[a-zA-z0-9.,!@#$%^&*()-=+`!]{8,16}$/;

export function inputFunction(inputid, value) {
  let error = {};

  if (inputid === "fullname") {
    if (value === "") {
      error[inputid] = `${inputid} is requird`;
    } else if (!nameRegEx.test(value)) {
      error[inputid] = `Enter valid ${inputid}`;
    } else {
      error[inputid] = ""
    }
  }

  if (inputid === "email") {
    if (value === "") {
      error[inputid] = `${inputid} is requird`;
    } else if (emailRegEx.test(value)) {
      error[inputid] = `Enter valid ${inputid}`;
    } else {
        error[inputid] = ""
    }
  }

  if (inputid === "phone") {
    if (value === "") {
      error[inputid] = `${inputid} is requird`;
    } else if (mobileRegEx.test(value)) {
      error[inputid] = `Enter valid ${inputid}`;
    } else {
        error[inputid] = ""
    }
  }

  if (inputid === "pwd") {
    if (value === "") {
      error[inputid] = `${inputid} is requird` ;
    } else if (passwordRegEx.test(value)) {
      error[inputid] = `Enter valid ${inputid}`;
    } else {
        error[inputid] = ""
    }
  }
  return error;
}
