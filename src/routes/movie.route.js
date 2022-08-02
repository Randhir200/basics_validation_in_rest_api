const { Router } = require('express');
const movieController = Router();

movieController.get('/', (req, res) => {
  res.send('Hello');
});

movieController.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

module.exports = movieController;
