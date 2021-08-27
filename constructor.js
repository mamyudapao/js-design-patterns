// 従来の記法
// function Person(name, age) {
//   this.name = name
//   this.age = age
//   this.getDetails = function () {
//     console.log(`${this.name} is ${this.age} years old!`)
//   }
// }

// ES6以降
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.getDetails = () => {
      console.log(`${this.name} is ${this.age} years old!`)
    }
  }
}

//インスタンスを作成
const personOne = new Person('John', 20);
personOne.getDetails();