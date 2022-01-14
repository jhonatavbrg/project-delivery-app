const express = require('express');
const rescue = require('express-rescue');
const path = require('path');

const router = express.Router();

router.get('/:image', rescue((req, res) => {
  const { image } = req.params;
  res.sendFile(path.resolve(`${__dirname}/../public/images/${image}`));
})); 

module.exports = router; 
