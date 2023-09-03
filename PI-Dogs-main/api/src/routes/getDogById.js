const c_getDogById = require("../controlers/c_getDogById");

const getDogById = async (req, res) => {
  try {
    const { idRaza } = req.params;
    const breeds = await c_getDogById(idRaza);
    return res.status(200).json(breeds);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = getDogById;
