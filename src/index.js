import express from 'express';
const PORT=4321;
const app=express();
app
  .get('/hello',r=>r.res.end('Hello world!'))
  .get('/err',()=>{throw 'Bad thing happened!'})
  .get('/err2',()=>{throw 'Awful thing happened!'})
  .get('/fatalerr',()=>process.nextTick(()=>{throw 'Crash'}))
  .use(r=>r.res.status(404).end('Still not here, sorry!'))
  .use((e,r,res,n)=>res.status(500).end(`Error: ${e}`))
  .listen(PORT, ()=>console.log(process.pid))
;
