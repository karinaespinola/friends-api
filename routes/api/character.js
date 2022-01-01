const express = require('express');
const router = express.Router();
const characterController = require('../../controllers/charactersController');

router.get('/:name', characterController.getSingleCharacter);

module.exports = router
