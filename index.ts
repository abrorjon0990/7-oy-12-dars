// 1-topshiriq

// enum Color {
//   Black = "Black",
//   Yellow = "Yellow",
//   Red = "Red",
// }

// function getColorMessage(color: Color): string {
//   if (color === Color.Black) return "Siz qora rangni tanladingiz!";
//   if (color === Color.Yellow) return "Siz sariq rangni tanladingiz!";
//   if (color === Color.Red) return "Siz qizil rangni tanladingiz!";
//   return "Bunday rang yo‘q!";
// }

// console.log(getColorMessage(Color.Black));

// 2-topshiriq

// interface Car {
//     brend: string;
//     price: number;
//     year: number;
//   }
  
//   const Cars: Car = {
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
  
//   interface Employee {
//     job: string;
//   }
  
//   type Natija = Person & Employee;
  
//   const worker: Natija = {
//     brend: "Ali",
//     age: 30,
//     job: "Dasturchi",
//   };
  
//   console.log(worker);
  
// 4-topshiriq
// const numbers: number[] = [1, 2, 3, 4, 5];

// const sum = numbers.map(v => v * 2);
// console.log(sum); 

  
// const word: string[] = ["gilos", "banana", "nok", "mandarin"];
// const sum = word.filter(v => v.length > 5);
// console.log(sum);


// 5-topshiriq
// const user = {
//     name: "Merseders",
//     age: 10,
//     price: 200000,
//   };
  
//   function Useradd(user: { name: string; age: number; price: number }) {
//     console.log(`Ism: ${user.name}, Yosh: ${user.age}, Narx: ${user.price}`);
//   }
//   Useradd(user);
  
