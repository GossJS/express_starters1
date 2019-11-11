'use strict';
import getUsersController from '../../controllers/get-users';
import createUserController from '../../controllers/create-user';
import deleteUserController from '../../controllers/delete-user';
import updateUserController from '../../controllers/update-user';
import getUserController from '../../controllers/get-user';


export default class Router {
  static rtr(x){
    const r = x.Router();
    r
      .route('/')
      .get(getUsersController)
      .post( createUserController)
      .delete(deleteUserController)
      .put(updateUserController)
    ;

    r
      .route('/simple-list')
      .get(r => r.res.render('simple-list', { o: [{ login: 'Ilya' }, { login: 'Daniel' } ] }) )
    ;

    r
      .route('/:username')
      .get(getUserController)
    ;
    return r;
  }
};
