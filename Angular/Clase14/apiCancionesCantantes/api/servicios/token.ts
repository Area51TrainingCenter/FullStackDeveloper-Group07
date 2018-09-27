import jwt = require("jwt-simple");
import moment = require("moment");
import randToken = require("rand-token");

const crearToken = id => {
  const payload = {
    id: id,
    iat: moment().unix(),
    exp: moment()
      .add(process.env.TIME_LIVE_TOKEN, "seconds")
      .unix()
  };

  const accessToken = jwt.encode(payload, process.env.KEY_SECRET_TOKEN);
  const refreshToken = randToken.uid(256);

  return { accessToken, refreshToken };
};

const decodificarToken = token => {
  const promesa = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, process.env.KEY_SECRET_TOKEN);
      resolve({ _id: payload.id });
    } catch (error) {
      if (error.message.toLowerCase() === "token expired") {
        reject({
          estado: 401,
          mensaje: "El token ha expirado"
        });
      } else {
        reject({
          estado: 500,
          mensaje: "El token es inválido"
        });
      }
    }
  });

  return promesa;
};

const generarAccessToken = id => {
  const payload = {
    id,
    iat: moment().unix(),
    exp: moment()
      .add(process.env.TIME_LIVE_TOKEN, "seconds")
      .unix()
  };

  return jwt.encode(payload, process.env.KEY_SECRET_TOKEN);
};

const generarUid = () => {
  return randToken.uid(256);
};

export { crearToken, decodificarToken, generarAccessToken, generarUid };
