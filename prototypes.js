let strName = "ritesH";
let str1 = "Akita";
// let uppStr = strName.toUpperCase();

String.prototype.charactersCount = function () {
  console.log(this.length);
};

String.prototype.toUpperCase = function () {
  console.log(this.length);
};

strName.charactersCount();

str1.charactersCount();

str1.toUpperCase();
