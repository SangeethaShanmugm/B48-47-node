const os = require("os")

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024)
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024)

//1kb => 1024 bytes => 1mb => 1024 kb => 1gb => 1024 mb

console.log("Os version", os.version())
console.log("Platform", os.platform())
console.log("Processor", os.cpus())

console.log("User Info", os.userInfo())
console.log(`Processor,${os.cpus().length} Core `)
console.log("Uptime", os.uptime())
console.log("arch", os.arch())