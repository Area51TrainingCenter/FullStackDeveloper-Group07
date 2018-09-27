const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require("mongoose-mongodb-errors");

import moment = require("moment");

const esquema = new mongoose.Schema({
  titulo: {
    type: String,
    trim: true,
    required: true
  },

  descripcion: {
    type: String,
    trim: true,
    required: true
  },

  creacion: {
    type: Number,
    default: moment().unix()
  }
});

esquema.plugin(mongodbErrorHandler);

const Receta = mongoose.model("Receta", esquema);

export default Receta;
