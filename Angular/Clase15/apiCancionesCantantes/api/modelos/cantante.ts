const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require("mongoose-mongodb-errors");

import moment = require("moment");

const esquema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: "El nombre es necesario."
  },

  creacion: {
    type: Number,
    default: moment().unix()
  }
});

esquema.plugin(mongodbErrorHandler);

const Cantante = mongoose.model("Cantante", esquema);

export default Cantante;
