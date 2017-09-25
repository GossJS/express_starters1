export default x=>{
  const rtr = x.Router();

  rtr
     .route('/first')
     .get(r=>r.res.end('GET first'))
     .post(r=>r.res.end('POST first'))
  ;
  rtr
     .route('/second')
     .get(r=>r.res.end('GET second'))
     .post(r=>r.res.end('POST second'))
  ;
  return rtr;
}
