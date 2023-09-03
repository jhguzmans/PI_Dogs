require("dotenv").config();
const URL = `https://api.thedogapi.com/v1/breeds/search?q=`;
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const c_getDogByName = async (name) => {
  //Aquí traemos los de la api
  const { data } = await axios(`${URL}${name}`);
  //Aquí traemos los de la base de datos
  //   const dataDB = await Dog.findAll({
  //     where: {
  //       name: {
  //         [Op.iLike]: name,
  //       },
  //     },
  //   });
  return data;
};
module.exports = c_getDogByName;
