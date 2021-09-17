var express = require("express");
var router = express.Router();
// let { verificaAdmin_Role } = require("../middlewares/autenticacion");
const { createPerson } = require("../controllers/persons");
const { readPerson } = require("../controllers/persons");
const { updatePerson } = require("../controllers/persons");
const { deletePerson } = require("../controllers/persons");
const { readPersonUnique } = require("../controllers/persons");
/* GET home page. */
router.post("/api/v1/createPerson", createPerson);
router.get("/api/v1/readPerson/:idper", readPersonUnique);
router.get("/api/v1/readPerson/", readPerson);
router.put("/api/v1/updatePerson", updatePerson);
router.delete("/api/v1/deletePerson/:idper", deletePerson);

module.exports = router;
