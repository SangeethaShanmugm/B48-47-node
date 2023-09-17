console.log("Hello")

const double = (n) => n * 2

// console.log(double(10))

// console.log(document)
// console.log(window)
// console.log(global)


// console.log(process.argv)
// console.log(process.argv[2])

//destructure process.argv

const [, , n] = process.argv

const double1 = (n) => n * 2

// console.log(double1(n))

const [, , a, b] = process.argv
const sum = (a, b) => a + b
console.log(sum(+a, +b))