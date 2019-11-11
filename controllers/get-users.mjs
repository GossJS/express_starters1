'use strict';
import { User } from '../bd/mongoconn';

export default async r => {
    const list = await User.find();
    r.res.render('get-users',
      { o: list.map(x => {
           const { login, password } = x;
           return { login, password };
      } ), title: 'Список пользователей' }
    );
};
