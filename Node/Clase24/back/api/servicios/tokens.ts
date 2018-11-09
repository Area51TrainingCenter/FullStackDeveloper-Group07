import jwt = require("jwt-simple")
import randToken = require("rand-token")
import moment = require("moment")

const crearTokens = (_id, rol) => {
	const payload = {
		_id,
		rol,
		iat: moment().unix(),
		exp: moment().add(process.env.TIME_TOKEN, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, process.env.KEYSECRET)

	const refreshToken = randToken.uid(256)

	return { accessToken, refreshToken }
}

const decodificarToken = accessToken => {
	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(accessToken, process.env.KEYSECRET)

			resolve(payload)
		} catch (error) {
			if (error.message.toLowerCase() == "token expired") {
				reject({
					estado: 401,
					mensaje: "El token ha expirado"
				})
			} else {
				reject({
					estado: 500,
					mensaje: "El token es inválido"
				})
			}
		}
	})

	return promesa
}

const generarNuevoAccessToken = (_id, rol) => {
	const payload = {
		_id,
		rol,
		iat: moment().unix(),
		exp: moment().add(process.env.TIME_TOKEN, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, process.env.KEYSECRET)

	return accessToken
}

const generarRefreshToken = () => {
	return randToken.uid(256)
}

export { crearTokens, decodificarToken, generarNuevoAccessToken, generarRefreshToken }