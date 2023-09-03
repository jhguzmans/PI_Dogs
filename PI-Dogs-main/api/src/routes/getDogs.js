const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");
const c_getDogByName = require("../controlers/c_geDogByName");
const getBreeds = async (req, res) => {
  try {
    if (req.query.name) {
      const { name } = req.query;
      const data = await c_getDogByName(name);
      return res.status(200).json(data);
    }
    const { data } = await axios(`${URL}`);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = getBreeds;
