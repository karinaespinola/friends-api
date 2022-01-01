const Character = require('../models/Character');
const { capitalize } = require('../lib/helpers');

const getSingleCharacter = async (req, res) => {
  if(!req.params.name) {
    res.status(400).json({ message: 'Hmmmm the name is required, looks like you need help from Joey to fill out your forms!' })
  }
  const name = capitalize(req.params.name.toLowerCase());
  
  // Get the character from the database by the name
  const requestedCharacter = await Character.find({ firstname: name }).exec();
  res.status(200).json(requestedCharacter);
}

module.exports = { getSingleCharacter }