import http = require("http")
import fs = require("fs")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	res.writeHead(200, { "content-type": "application/pdf" })

	const streamLectura = fs.createReadStream("./manual.pdf")

	streamLectura.pipe(res)

	/*fs.readFile("./manual.pdf", (err, data) => {
		if (err) {
			console.log(err)
			res.writeHead(500, { "content-type": "text/plain" })
			return res.end("Ocurrió un error")
		}
		res.writeHead(200, { "content-type": "application/pdf" })
		res.end(data)
	})*/
})

servidor.listen(3000, () => console.log("Servidor ejecutándose en el puerto 3000"))