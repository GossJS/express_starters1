import jsonfile  from 'jsonfile-promised';
import path from 'path';
import _ from 'lodash';
const PATH = path.resolve('./users.json');

export default x=>{
  const rtr = x.Router();

  rtr
    .route('/')
    .get(async r=>{
        const j = await jsonfile.readFile(PATH);
        r.res.send(`<ol>${j.users.map(x=>`<li>${x.login}</li>`).join(' ')}</ol>`);
      })
    .post(async r=> {
       const j = await jsonfile.readFile(PATH);
       //const {login, password} = r.params;
       const {login, password} = r.body;
       if (!login) return r.res.end('Nothing to add');
       if ( ! _.find(j.users, {login})   ) {
         j.users.push( {login, password}  );
         await jsonfile.writeFile(PATH,j);
         r.res.json({login, password});
       } else {
         r.res.send('User already exists');
       }
    })

  ;



  rtr
    .route('/:login/:password')
    .get(r=>r.res.end('You should use DELETE for that') )
    .delete(async r=> {
        const j = await jsonfile.readFile(PATH);
        const {login, password} = r.params;
        if (!login) return r.res.end('Nothing to delete');
        const foundUser = _.find(j.users, {login});
        if ( foundUser) {
          if (foundUser.password == password) {
             if (j.users.length>3) {
                 _.remove(j.users, u=> u.login == login);
                 await jsonfile.writeFile(PATH,j);
                 r.res.json({login, password})
             }  else {
                 r.res.send('Too few users!');
             }
          } else {
            r.res.send('You do not have permission to delete');
          }
        } else {
          r.res.send('User already does not exist');
        }
    })
;

  return rtr;
}
