import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import usersR from './routes/users';

const PORT = 4321;
const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = express();

app
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(compression())

  .use('/users', usersR.rtr(express))

  .get(/hello/, r => r.res.end('Hello world!'))

  .use(({ res: r }) => r.status(404).set(hu).end('Пока ещё нет!'))
  .use((e, r, rs, n) => rs.status(500).set(hu).end(`Ошибка: ${e}`))
  .set('view engine', 'pug')
;

export default http
  .createServer(app)
  .listen(process.env.PORT || PORT, () => console.log(process.pid))
;
