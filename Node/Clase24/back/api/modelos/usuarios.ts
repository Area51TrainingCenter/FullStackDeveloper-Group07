const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	correo: {
		type: String,
		email: true,
		unique: true,
		trim: true,
		required: true
	},

	contrasena: {
		type: String,
		trim: true,
		required: true
	},

	rol: {
		type: String,
		trim: true,
		required: true
	},

	refreshToken: String
})

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario