'use strict';
import { User } from '../bd/mongoconn';

export default async r => {
    const list = await User.find();
    r.res.render('get-users',
      { o: list.map(x => {
           const { username, password } = x;
           return { login: username, password };
      } ), title: 'Список пользователей' }
    );
};
