import http = require("http")

const metodosValidos = (metodo): boolean => {
	const metodos = ["get", "post", "put", "delete"]
	if (metodos.indexOf(metodo.toLowerCase()) > -1) return true

	return false
}

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const metodo = req.method.toLowerCase()

	if (metodosValidos(metodo)) {
		const ruta = req.url.toLowerCase()

		if (ruta == "/usuarios") {
			if (metodo == "get") {
				res.writeHead(200, { "content-type": "application/json" })
				res.end(JSON.stringify([
					{ nombre: "usuario 1", apellido: "apellido 1" },
					{ nombre: "usuario 2", apellido: "apellido 2" }
				]))
			}

			if (metodo == "post") {
				res.writeHead(200, { "content-type": "text/plain" })
				res.end("Usuario insertado")
			}

			if (metodo == "put") {
				res.writeHead(200, { "content-type": "text/plain" })
				res.end("Usuario actualizado")
			}

			if (metodo == "delete") {
				res.writeHead(200, { "content-type": "text/plain" })
				res.end("Usuario eliminado")
			}
		} else {
			res.writeHead(404, { "content-type": "text/plain" })
			res.end("Ruta no encontrada")
		}






	} else {
		res.writeHead(405, { "content-type": "text/plain" })
		res.end("Método no permitido")
	}
})

servidor.listen(3000, () => console.log("Servidor ejecutándose en el puerto 3000"))