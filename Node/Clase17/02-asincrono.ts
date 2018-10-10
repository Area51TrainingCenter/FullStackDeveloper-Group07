import fs = require("fs")

//const texto = fs.readFileSync("./lectura.txt", { encoding: "utf8" })

let texto

fs.readFile("./lectura.txt", "utf8", (err, data) => {
	if (err) {
		console.log(err)
		return false
	}

	texto = data

	console.log(texto)
})


//const suma = 10 + 20

