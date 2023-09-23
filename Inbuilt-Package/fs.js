const fs = require("fs")
const { writeFile } = require("fs/promises")

const quote = "No beauty shines brighter than that of a good heart🥳🥳"

// fs.writeFile("awesome.pdf", quote, (err) => {
//     console.log("Completed writing awesome.html")
// })

//Task
const quote2 = "Live more worry less🥳🥳"
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log(`Completed writing text-${i}.html`)
//     })
// }

//Task-2
// node fs.js 20 => 10 files needs to be created 
//  | note-1.txt, note-2.txt ....note-20.txt

// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/note-${i}.txt`, quote2, (err) => {
//         console.log(`Completed writing note-${i}.txt`)
//     })
// }

// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error❌", err)
//     }
//     console.log("The content of the file is =>", data)
// })

const niceQuote = "Make everyday a little less ordinarily"

// fs.appendFile("./nice.txt", niceQuote + "\n", (err) => {
//     console.log("Completed writing nice.txt")
// })


// fs.unlink("./toRemove.txt", (err) => {
//     console.log("Deleted Successfully")
// })

// fs.readdir("./backup", (err, files) => {
//     console.log("All file names =>", files)
// })

//Delete all files in backup folder

// fs.readdir("./backup", (err, data) => {
//     data.forEach((fileName) => {
//         fs.unlink(`./backup/${fileName}`, (err) => {
//             console.log("Deleted Successfully", fileName)
//         })

//     })
// })


// writeFile => callStack => WebApi(Whoever finishes writing first) => callBack Q => callStack

// fs.writeFile, fs.readFile, fs.appendFile, fs.unlink => async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync => sync
// const quote3 = "Good Day"
// fs.writeFileSync("text.pdf", quote3)
// console.log("Completed writing awesome.html")




const [, , noOfFiles] = process.argv
for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFileSync(`./backup/note-${i}.txt`, quote2)
    console.log(`Completed writing note-${i}.txt`)
}

