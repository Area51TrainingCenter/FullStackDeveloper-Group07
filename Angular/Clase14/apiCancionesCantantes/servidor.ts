import mongoose = require("mongoose");

require("dotenv").config({ path: "./variables.env" });

mongoose.connect(
  process.env.DATABASE,
  { keepAlive: +process.env.KEEP_ALIVE }
);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error =>
  console.log(`Error de conexión a Mongo: ${error}`)
);
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"));

require("./api/modelos/usuario");
require("./api/modelos/cantante");
require("./api/modelos/cancion");

import { app } from "./bin/app";
app.set("PORT", process.env.PORT);

const servidor = app.listen(app.get("PORT"), () =>
  console.log(`Servidor ejecutándose en el puerto ${app.get("PORT")}`)
);
