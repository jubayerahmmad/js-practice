function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}
// myFunc.call({ a: 52, b: 2 }, 10, 5);
// myFunc.apply({ a: 52, b: 2 }, 10, 5); // wont work as it expects an array
// myFunc.apply({ a: 52, b: 2 }, [10, 5]); // will work as it is an array

// myFunc.bind({ a: 52, b: 2 }, 10, 5); // it doesn't call the function immedietly like call and apply method
const func = myFunc.bind({ a: 52, b: 2 }); // we have to store it in a variable
func(10, 5);
