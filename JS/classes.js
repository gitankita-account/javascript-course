class One {
  constructor(brand) {
    this.carBrand = brand;
  }
  static n = 90;
  fun1() {
    const num = 23;
    console.log("2019 model", this.carBrand);
  }

  fun2(myname) {
    console.log("2020 model", myname, this.carBrand);
  }

  fun3() {
    console.log("2024 model", this.carBrand);
  }
}

class Two extends One {
  constructor(br) {
    super(br);
    console.log("child constructor");
  }

  fun3() {
    console.log("2l", this.carBrand);
  }

  fun4() {
    this.fun1();
    console.log("model fun4", this.carBrand);
  }
}

// const clsObj = new One("Hyundai");
// const clsObj1 = new One("Kia");

// console.log(clsObj.n);
// clsObj.fun2("Ritesh");
// clsObj1.fun2("Ankita");

// clsObj1.fun2("ANkita");

// const cls2 = new Two("Audi");
// cls2.fun4();
// cls2.fun3()

// console.log(One.n);

// One.fun1()

// iife

// (function selfInvoked(num) {
//   console.log("self invoked",num);
// })(78)

// ((log) => {
//   console.log("self invoked arrow", log);
// })(57687);

// 