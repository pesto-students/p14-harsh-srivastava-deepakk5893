class Calculator{
  add(num1,num2){
      return num1+num2
  }
  subtract(num1,num2){
      return num1-num2
  }
  multiply(num1,num2){
      return num1*num2
  }
  divide(num1,num2){
      return num1/num2
  }
}

class ScientificCalculator extends Calculator {
  square(num){
      return num**2
  }
  cube(num){
      return num**3
  }
  power(num,raise){
      return num**raise
  }
  multiplyByTwo(num) {
      return num * 2;
  }
  powerOfThree(num){
      return num**3
  }
}

let obj = new ScientificCalculator
let addResult = obj.add.call(obj, 10, 5);
let subResult = obj.subtract.apply(obj, [10, 5]);
let multiplyByTwo = obj.multiplyByTwo.bind(obj)
let powerOfThree = obj.powerOfThree.bind(obj)