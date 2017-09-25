import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import myR from './routes/my';



import compression from 'compression';
const PORT=4321;
const app=express();
app
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))

  .use(compression())
  .use((r,res,n)=>n())

  .use('/my', myR(express))

  .get(/hello/,r=>r.res.end('Hello world!'))

  .get('/add/:a/:b',r=> r.res.end(String(Number(r.params.a)+Number(r.params.b))))

  .get('/err',()=>{throw 'Bad thing happened!'})
  .get('/err2',()=>{throw 'Awful thing happened!'})

  .use(r=>r.res.status(404).end('Still not here, sorry!'))
  .use((e,r,res,n)=>res.status(500).end(`Error: ${e}`))
;
http
  .createServer(  app  )
  .listen(PORT, ()=>console.log(process.pid))
;
