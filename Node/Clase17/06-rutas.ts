import http = require("http")
import fs = require("fs")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {


	if (req.url === "/") {
		res.writeHead(200, { "content-type": "text/plain" })
		res.end("Bienvenido")
	} else if (req.url === "/usuarios") {
		res.writeHead(200, { "content-type": "text/html" })
		res.end(`
			<table>
				<tr>
					<td>Carlos Cáceres</td>
				</tr>
			</table>
		`)
	} else if (req.url === "/pdf") {
		res.writeHead(200, { "content-type": "application/pdf" })

		const streamLectura = fs.createReadStream("./manual.pdf")

		streamLectura.pipe(res)
	} else {
		res.writeHead(404, { "content-type": "text/html" })
		res.end("<strong>Ruta equivocada</strong>")
	}


	//res.end(req.url)
})

servidor.listen(3000, () => console.log("Servidor ejecutánse en el puerto 3000"))