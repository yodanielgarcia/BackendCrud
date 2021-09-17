var express = require("express");
var router = express.Router();
let { verificaAdmin_Role } = require("../middlewares/autenticacion");
const { createPerson } = require("../controllers/persons");
const { readPerson } = require("../controllers/persons");
const { updatePerson } = require("../controllers/persons");
const { deletePerson } = require("../controllers/persons");
const { readPersonUnique } = require("../controllers/persons");
/* GET home page. */
router.post("/api/v1/createPerson", verificaAdmin_Role, createPerson);
router.get("/api/v1/readPerson/:idper", verificaAdmin_Role, readPersonUnique);
router.get("/api/v1/readPerson/", verificaAdmin_Role, readPerson);
router.put("/api/v1/updatePerson", verificaAdmin_Role, updatePerson);
router.delete("/api/v1/deletePerson/:idper", verificaAdmin_Role, deletePerson);

module.exports = router;
