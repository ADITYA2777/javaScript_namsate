// function sum(a,b,c) {
//     return a + b + c
// }
// console.log(sum(2,3,5));
// function currey(ad) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return ad(a, b, c)
//             }
//         }
//     }
// }

const currySum = currey(sum)
console.log(currySum(2)(3)(5));

const add1 = currySum(4);
const add2 = add1(4);
const add3 = add2(4);
console.log(add3);

function person(name) {
    this.name = name
}

const p1 = new person('aditya')
const p2 = new person('adityaaaa')

globalThis.name = "batvaman"

function sayName() {
   console.log(`my name is ${this.name}`);
}

sayName()

const promise1 = Promise.resolve(3);
const promise2 = 43;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'foo')
});

Promise.allSettled([promise1, promise2, promise3]).then((val) => {
    console.log(val);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});

const promisesss = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((val) => {
  console.log(val);
});
Promise.allSettled([promise1, promise2, promise3]).then((val) => {
    console.log(val);
});

const promisew = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});

const promiseq= new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((val) => {
  console.log(val);
});
Promise.allSettled([promise1, promise2, promise3]).then((val) => {
    console.log(val);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});

const promisee = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((val) => {
  console.log(val);
});
Promise.allSettled([promise1, promise2, promise3]).then((val) => {
    console.log(val);
});

const promises = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((val) => {
  console.log(val);
});
async function greet()
{ return Promise.resolve("heooo") }

greet()
    .then((val) =>{ console.log(val)
})
async function greet()

{ return Promise.resolve("heooo") }

greet()
    .then((val) =>{ console.log(val)
})
greet()
    .then((val) =>{ console.log(val)
})
greet()
    .then((val) =>{ console.log(val)
})
greet()
    .then((val) =>{ console.log(val)
})
greet()
    .then((val) =>{ console.log(val)
})
