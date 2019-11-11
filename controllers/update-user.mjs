'use strict';
import { User } from '../bd/mongoconn';

export default async r => {
  const {login, password, newpass} = r.body;
  const x =   await User.update({ username: login, password }, { password: newpass });
  /* если пароль неверен, тоже будет nModified: 0  */
  if (x.nModified < 1) return r.res.end('no such user');
  r.res.json(x);
};
