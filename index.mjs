import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import myR from './routes/my';
import usersR from './routes/users';



import compression from 'compression';
const PORT=4321;
const app=express();

app
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(compression())
  .use((r,res,n)=>n())

  .use('/my', myR(express))
  .use('/users', usersR.rtr(express))

  .get(/hello/,r=>r.res.end('Hello world!'))

  .get('/add/:a/:b',r=> r.res.end(String(Number(r.params.a)+Number(r.params.b))))

  .get('/err',()=>{throw 'Bad thing happened!'})
  .get('/err2',()=>{throw 'Awful thing happened!'})

  .use(r=>r.res.status(404).end('Still not here, sorry!'))
  .use((e,r,res,n)=>res.status(500).end(`Error: ${e}`))
;
http
  .createServer(  app  )
  .listen(process.env.PORT || PORT, ()=>console.log(process.pid))
;
