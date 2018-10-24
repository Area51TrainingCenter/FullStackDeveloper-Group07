import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},

	descripcion: String,

	anno: Number
})

const Novela = mongoose.model("novela", esquema)

export default Novela