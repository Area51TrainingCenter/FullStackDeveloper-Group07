const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require("mongoose-mongodb-errors");

import moment = require("moment");

const esquema = new mongoose.Schema({
  cancion: {
    type: String,
    trim: true,
    required: true
  },

  cantante: {
    type: mongoose.Schema.ObjectId,
    ref: "Cantante",
    required: true
  },

  creacion: {
    type: Number,
    default: moment().unix()
  }
});

function autopoblar(next) {
  this.populate("cantante");
  next();
}

esquema.pre("find", autopoblar);
esquema.pre("findOne", autopoblar);

esquema.plugin(mongodbErrorHandler);

const Cancion = mongoose.model("Cancion", esquema);

export default Cancion;
