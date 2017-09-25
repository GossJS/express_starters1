import jsonfile  from 'jsonfile-promised';
import path from 'path';
const PATH = path.resolve('./users.json');

import _ from 'lodash';

export default x=>{
  const rtr = x.Router();

  rtr
    .route('/')
    .get(async r=>{
        const j = await jsonfile.readFile(PATH);
        const result = '<ul>'+ j.users.map(x=>`<li>${x.login}</li>`).join(' ') + '</ul>';
        r.res.send(result);

      })
    .post(r=>r.res.end('does not do anything') )
  ;



  rtr
    .route('/:login/:password')
    .get(r=>r.res.end('You should use POST for that') )
    .post(async r=> {
       const j = await jsonfile.readFile(PATH);
       const {login, password} = r.params;
       if ( ! _.find(j.users, {login})   ) {
         j.users.push( {login, password}  );
         console.log( {login, password}  );
         await jsonfile.writeFile(PATH,j);

         r.res.json({login, password});
       } else {
         r.res.send('User already exists');
       }
    })
    .delete(async r=> {
        const j = await jsonfile.readFile(PATH);
        const {login, password} = r.params;
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
