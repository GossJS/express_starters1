'use strict';

import { User } from '../bd/mongoconn';

export default async r => {
  const { login, password } = r.body;
  const x  = await User.findOne({ username:login });
  // вместо этого лучше в модели обозначить unique
  if (x) return r.res.send('User already exists!');
  const newUser = new User({ username:login, password });
  r.res.status(201).json(await newUser.save());
}
