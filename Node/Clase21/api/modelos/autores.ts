const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	autor: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},

	estado: {
		type: Boolean,
		defaultTo: true
	}
}, {
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	})

esquema.virtual("novelas", {
	ref: "novelas",
	localField: "_id",
	foreignField: "autor"
})

esquema.statics.listadoAutores = function (pagina: number) {
	const tamano = 2
	const skip = pagina * 2
	const orden = { "autor": 1 }

	return this.aggregate([
		{
			$lookup: {
				from: "novelas",
				localField: "_id",
				foreignField: "autor",
				as: "libros"
			}
		},

		{
			$project: {
				"autor": 1,
				"libros.titulo": 1,
				"libros.descripcion": 1,
				"_id": 0
			}
		},

		{
			$sort: orden
		},

		{
			$skip: skip
		},

		{
			$limit: tamano
		}

	])
}


const Autor = mongoose.model("Autor", esquema)

export default Autor