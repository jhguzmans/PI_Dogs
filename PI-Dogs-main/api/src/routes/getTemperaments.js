const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getTemperaments = async (req, res) => {
  let temperaments = [];
  let temp = [];
  try {
    const { data } = await axios(URL);
    data.forEach((element) => {
      if (element.temperament) {
        temp = [...temp, ...element.temperament.split(",")];
      }
    });
    temperaments = temp.map((palabra) => palabra.trimStart());
    const temperaments_unique = [...new Set(temperaments)];
    const temperName = temperaments_unique.map((temper) => ({ name: temper }));
    console.log(temperaments_unique.length);
    await Temperament.bulkCreate(temperName);
    return res.status(200).send("Temperamentos guardados en la DB");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = getTemperaments;
