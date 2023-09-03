const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogeds = require("./getDogs");
const getDogById = require("./getDogById");
//const getBreedByName = require("./getBreedByName");
const postNewDog = require("./postNewDog");
const getTemperaments = require("./getTemperaments");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.get("/dogs/name?", getBreedByName);
router.get("/dogs", getDogeds);
router.get("/dogs/:idRaza", getDogById);
router.post("/dogs", postNewDog);
router.get("/temperaments", getTemperaments);
module.exports = router;
