'use strict';
import getUsersController from '../../controllers/get-users';
import getUserController from '../../controllers/get-user';
import createUserController from '../../controllers/create-user';
import deleteUserController from '../../controllers/delete-user';
import updateUserController from '../../controllers/update-user';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get ( getUsersController  )
          .post( createUserController)
          .delete(deleteUserController)
          .put(updateUserController)
        ;

        r
          .route('/:username')
          .get(getUserController)
        ;
        return r;
  }
}
