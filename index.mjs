import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import Timer from 'timerpromise';

import myR from './routes/my';
import usersR from './routes/users';



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
  .use('/users', usersR(express))

  .get('/hello/:time',r=>{
          ( new Timer(r.params.time) ).start
            .then(  x=> r.res.end(`Hello, ${r.params.time}`))
         ;
      })

  .get('/hello2/:time',r=>{
          (async()=>{
              await ( new Timer(r.params.time) ).start;
              r.res.end(`Hello2, ${r.params.time}`);
          })();
      })


  .get('/hello3/:time',async r=>{
          await ( new Timer(r.params.time) ).start;
          r.res.end(`Hello3, ${r.params.time}`);
      })


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
