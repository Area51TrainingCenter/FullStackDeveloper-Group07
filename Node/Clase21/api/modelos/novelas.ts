const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},

	descripcion: String,

	anno: Number,

	autor: {
		type: mongoose.Schema.ObjectId,
		ref: "Autor"
	}
})

const Novela = mongoose.model("novelas", esquema)

export default Novela