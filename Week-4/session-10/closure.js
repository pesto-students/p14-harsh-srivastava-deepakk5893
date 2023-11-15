function counter(){
  let num = 0
  return function (){
      return ++num
  }
}
firstCounter = new counter()
secondCounter = new counter()
let firstValues = [];
for (let i = 0; i < 5; i++) {
firstValues.push(firstCounter());
}
let secondValues = [];
for (let i = 0; i < 3; i++) {
secondValues.push(secondCounter());
}
console.log(firstValues);
console.log(secondValues);