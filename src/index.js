import http from 'http';
import express from 'express';
const  PORT=4321
     , app=express()
;
app
  .use((r,res,n)=>console.log(r.url)||n())
  .get('/hello',r=>r.res.end('Hello world!'))
  .get('/err',()=>{throw 'Bad thing happened!'})
  .get('/err2',()=>{throw 'Awful thing happened!'})
  .get('/fatalerr',()=>process.nextTick(()=>{throw 'Crash'}))
  .use(r=>r.res.status(404).end('Still not here, sorry!'))
  .use((e,r,res,n)=>res.status(500).end(`Error: ${e}`))
;

http
.createServer(app)
.listen(PORT, ()=>console.log(process.pid))
;
