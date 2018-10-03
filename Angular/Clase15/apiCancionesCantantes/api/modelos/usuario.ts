const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const md5 = require("md5");
const validator = require("validator");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
import bcrypt = require("bcrypt");

import moment = require("moment");

const esquema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    trim: true,
    required: "El nombre es necesario."
  },

  usuario: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: "El usuario es necesario y único."
  },

  contrasena: {
    type: String,
    trim: true
  },

  estado: {
    type: Boolean,
    default: true
  },

  creacion: {
    type: Number,
    default: moment().unix()
  },

  modificacion: {
    type: Number,
    default: moment().unix()
  }
});

esquema.pre("save", function(next) {
  const usuario = this;
  usuario.modificacion = moment().unix();

  if (!this.isModified("contrasena")) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(usuario.contrasena, salt, function(err, hash) {
      if (err) return next(err);
      usuario.contrasena = hash;
      next();
    });
  });
});

esquema.methods.compararContrasena = function(contrasena, cb) {
  return bcrypt.compare(contrasena, this.contrasena, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

esquema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.contrasena;
  return obj;
};

esquema.plugin(mongodbErrorHandler);

const Usuario = mongoose.model("Usuario", esquema);

export default Usuario;
