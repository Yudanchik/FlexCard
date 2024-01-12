
require('@babel/register');
const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');
const ssr = require('./middleware/ssr');
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(ssr);

app.use('/', indexRouter);

const PORT = 4002;




app.listen(PORT, () => {
  console.log(`Quiz работает на ${PORT} порту`);
});

