import express from 'express';
import fs from 'fs';

const af=(fpath, line)=>new Promise((res,rej)=>fs.appendFile(fpath,line+'\n',(e,x)=>{if(e)rej(e);else res(String(x))}));
const PORT=4321;
express()
  .get('/write/:what', async r => {
    await af('lines.txt', `${r.url} ${r.params.what}`);
    r.res.end('OK');
  })
  .get('/read', async r => {
    fs.createReadStream('lines.txt').pipe(r.res);
  })
  .use(r=>r.res.status(404).end('Still not here, sorry!'))
  .use((e,r,res,n)=>res.status(500).end(`Error: ${e}`))
  .listen(PORT, ()=>console.log(process.pid))
;
