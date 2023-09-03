const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");
const { Dog } = require("../db.js");
const esUUID = (str) => {
  const uuidPattern =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidPattern.test(str);
};
const c_getDogById = async (idRaza) => {
  if (esUUID(idRaza)) {
    console.log("Se hace una busqueda en la DB");
    const dataDB = await Dog.findAll({
      where: { id: idRaza },
    });
    if (dataDB.length == 0) throw Error("No existe ese ID en la base de datos");
    return dataDB;
  } else {
    console.log("Se hace una busqueda por API");
    const { data } = await axios(`${URL}/${idRaza}`);
    return data;
  }
};
module.exports = c_getDogById;
