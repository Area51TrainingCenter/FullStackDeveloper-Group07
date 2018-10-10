import fs = require("fs")

const streamLectura = fs.createReadStream("./lectura.txt", "utf8")

const streamEscritura = fs.createWriteStream("./escritura.txt", "utf8")

/*streamLectura.on("data", chunk => {
	streamEscritura.write(chunk)
})

streamLectura.on("end", () => {
	console.log("streaming completo")
})*/

streamLectura.pipe(streamEscritura)