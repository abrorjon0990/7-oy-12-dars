"use strict";
// 1-topshiriq
// enum Color {
//   Black = "Black",
//   Yellow = "Yellow",
//   Red = "Red",
// }
// function ColorName(color: Color): string {
//   if (color === Color.Black) return "Siz qora rangni tanladingiz!";
//   if (color === Color.Yellow) return "Siz sariq rangni tanladingiz!";
//   if (color === Color.Red) return "Siz qizil rangni tanladingiz!";
//   return "Bunday rang yo‘q!";
// }
// console.log(ColorName(Color.Black));
// 2-topshiriq
// interface Car {
//     brend: string;
//     price: number;
//     year: number;
//   }
//   let Cars: Car = {
//     brend: "Mercedes",
//     price: 200000,
//     year: 2023,
//   };
//   console.log(Cars);
// 3-topshiriq
// interface Person {
//     brend: string;
//     age: number;
//   }
//   interface Emptying {
//     job: string;
//   }
//   type Natija = Person & Emptying;
//   let worker: Natija = {
//     brend: "Ali",
//     age: 30,
//     job: "Dasturchi",
//   };
//   console.log(worker);
// 4-topshiriq
// let numbers: number[] = [1, 2, 3, 4, 5];
// let sum = numbers.map(v => v * 2);
// console.log(sum); 
// let sum = word.filter(v => v.length > 5);
// let word: string[] = ["gilos", "banana", "nok", "mandarin"];
// console.log(sum);
// 5-topshiriq
// let user = {
//     name: "Merseders",
//     age: 10,
//     price: 200000,
//   };
//   function Useradd(user: { name: string; age: number; price: number }) {
//     console.log(`Ism: ${user.name}, Yosh: ${user.age}, Narx: ${user.price}`);
//   }
//   Useradd(user);
// 6-topshiriq
// function add(a: number, b: number): number {
//     return a + b;
//   }
//   console.log(add(2, 1));
//   function sum(...num: number[]): number {
//     return num.reduce((a, b) => a + b, 0) / num.length;
//   }
//   console.log(sum(20, 10, 10));
// 7-topshiriq
// let personTuple: [string, number, string] = ["Abror", 16, "Abdurahimovv"];
// function addname([a, b]: [number, string]): [string, number] {
//   return [b, a];
// }
// console.log(addname([10, "Hello"]));
// 9-topshiriq
function UnkwonChek(input) {
    if (typeof input === "string")
        return input.length;
    return "Bu string emas";
}
console.log(UnkwonChek("Salom"));
function toUpperCase(input) {
    return String(input).toUpperCase();
}
console.log(toUpperCase(111));
