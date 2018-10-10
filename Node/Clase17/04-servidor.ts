import http = require("http")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	//res.writeHead(201, { "content-type": "text/plain" })
	res.writeHead(201, { "content-type": "text/html" })
	res.write("<h1>Respuesta a la petición</h1>")
	//res.write("<strong>Algo más en mi respuesta</strong>")
	res.end("<strong>Algo más en mi respuesta</strong>")
	//res.end()
})

servidor.listen(3000, () => console.log("Servidor ejecutándose en el puerto 3000"))



