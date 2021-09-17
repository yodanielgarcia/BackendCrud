const express = require("express");
let app = express();
//========================
// Verificar AdminRole
//========================
let verificaAdmin_Role = (req, res, next) => {
  //const token = req.headers['auth'];
  const jwt = require("jsonwebtoken");
  const token = req.headers["authorization"];
  const tokenKey = require("../helper/constants");
  console.log(tokenKey.tokenKey);
  jwt.verify(token, tokenKey.tokenKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        mensaje: "token inválido",
        err,
      });
    } else {
      let usuario = req.headers["auth"]; // Authorization
      if (usuario !== "ADMIN") {
        return res.status(401).json({
          ok: false,
          //err,
          err: {
            message: "Requiere privilegios de ADMIN",
          },
        });
      }
      next();
    }
  });
};

module.exports = {
  verificaAdmin_Role,
  app,
};
