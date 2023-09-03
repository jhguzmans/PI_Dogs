const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");

const postNewDog = async (req, res) => {
  try {
    const {
      weight,
      height,
      id,
      name,
      bred_for,
      breed_group,
      life_span,
      temperament,
      reference_image_id,
    } = req.body;
  } catch (error) {}
};
module.exports = postNewDog;
