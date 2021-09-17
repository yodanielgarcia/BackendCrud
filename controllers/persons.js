const sql = require("../datebase");
//POST insert
exports.createPerson = (req, res) => {
  var user = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    edad: req.body.edad,
    fechaContrato: req.body.fechaContrato,
    fechaSalida: req.body.fechaSalida,
  };
  sql.query("INSERT INTO usuarios SET ?", user, (err, data) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    if (data.length) {
      console.log("result", data[0]);
      return;
    }
  });
  res.send({
    code: 200,
    success: "user registered sucessfully",
  });
};

//PUT- Modificar
exports.updatePerson = (req, res) => {
  var condition = { Id: req.body.Id };
  console.log(condition);
  sql.query(
    "update usuarios SET ? WHERE ?",
    [req.body, condition],
    (err, data) => {
      if (err) {
        console.log("error:", err);
        return;
      }
      if (data.length) {
        console.log("result", data[0]);
        return;
      }
    }
  );
  res.json({
    data: "updated ok",
  });
};

//GET Traer
exports.readPersonUnique = (req, res) => {
  console.log(req.params.id);
  sql.query(
    "select * from usuarios WHERE Id=" + req.params.idper,
    (err, data) => {
      if (err) {
        console.log("error:", err);
        return;
      }
      if (data.length) {
        console.log("result", data[0]);
        res.send(data[0]);
        return;
      }
    }
  );
};

exports.readPerson = (req, res) => {
  sql.query("select * from usuarios", (err, data) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    if (data.length) {
      console.log("result", data[0]);
      res.send(data);
      return;
    }
  });
};

exports.deletePerson = (req, res) => {
  sql.query(
    "delete from usuarios where Id =" + req.params.idper,
    (err, data) => {
      if (err) {
        console.log("error:", err);
        return;
      }
      if (data.length) {
        console.log("result", data[0]);
        return;
      }
    }
  );
  res.json({
    data: "deleted",
  });
};
