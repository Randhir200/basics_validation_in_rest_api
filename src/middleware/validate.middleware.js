const validateMiddleware = (req, res, next) => {
    const body = req.body;
    const types = ['number'];
    for (let item in body) {
      if (body[item] === '' || body[item] === null) {
        return res.status(400).send('field cannot be empty');
      }
      if (
        (item === 'id' || item === 'Rating') &&
        typeof body[item] !== 'number'
      ) {
        return res.status(400).send(`${item} type should be number    `);
      }
      if (
        (item === 'Name' || item === 'Description' || item === 'Gender') &&
        typeof body[item] !== 'string'
      ) {
        return res.status(400).send(`${item} type should be string`);
      }
      
      if (item === 'Cast' && typeof body[item] !== 'object') {
        return res.status(400).send(`${item} type should be arr`);
      }
    }
    next();
  };

  module.exports = validateMiddleware