const express = require('express');
const app = express();

app
.use('/api', require('./api')(express))
.get('/', (req, res) => {
  res
  .status(200)
  .set({
     'Content-Type': 'text/html; charset=utf-8'
  })
  .send('<h1>Привет!</h1>');
})
.post('/', (req, res) => {
  res
  .status(200)
  .set({
     'Content-Type': 'text/html; charset=utf-8'
  })
  .send('<h1>Привет пост!</h1>');
})
.get('/src', (req, res) => {
  res
  .status(200)
  .set({
     'Content-Type': 'text/javascript; charset=utf-8'
  });
  require('fs').createReadStream('./index.js').pipe(res);
})
.use((req, res) => {
  res
  .status(404)
  .set({
     'Content-Type': 'text/html; charset=utf-8'
  })
  .send('<h1 style="color:red">Не найдено!</h1>');
})

.listen(80, () => console.log(process.pid));
