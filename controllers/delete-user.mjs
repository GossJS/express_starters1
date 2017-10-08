'use strict';
import {User} from '../bd/mongoconn';

export default async r=>{
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
}
