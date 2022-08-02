const express = require('express');
const movieController = require('./routes/movie.route');
const app = express();
const validateMiddleware = require('./middleware/validate.middleware')
app.use(express.json());
app.use(validateMiddleware);

app.use('/movies', movieController);

const port = 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
