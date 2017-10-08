'use strict';
import {User} from '../../bd/mongoconn';
  /* см. другую реализацию в mongoconn */
export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get(async r=>{
              const list = await User.find();
              r.res.json(
                list.map( x=> {
                     const {username, password} = x;
                     return {login: username, password};
                })
              )
              //r.res.json( list.map ( x=> ({  login: x.username  }) ) );
          })
          .post(async r=> {
             const {login, password} = r.body;
             const x  = await User.findOne({username:login, password});
             if (x) return r.res.send('User already exists!');
             const newUser = new User( {username:login, password} );
             r.res.json( await newUser.save() );

          })
          .delete(async r=> {
             const {login, password} = r.body;
             const list = await User.find();
             if (list.length < 5) return r.res.end( 'first records cannot be deleted' );
             try {
               const result =   await User.remove({username:login, password}) ;
               if ( result.result.n === 0 ) throw 'Nothing to delete!';
               console.log (result.result.n)
               r.res.json( result );
             } catch(e) {
               r.res.end( e )
             }
          })
          .put(async r=> {
             const {login, password, newpass} = r.body;
             const x =   await User.update( {username:login, password}, {password: newpass} )  ;
             /* если пароль неверен, тоже будет nModified: 0  */
             if (x.nModified < 1)   return r.res.end( 'no such user' );
             r.res.json( x );
          })
        ;
        
        r
          .route('/:username')
          .get(async r=>{
              const {username} = r.params;
              const result = await User.findOne({username});
              r.res.json( result  )
          })
        ;
        return r;
  }
}
