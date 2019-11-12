'use strict';
import { User } from '../bd/mongoconn';

export default async r => {
  const { login, password } = r.body;
  const x  = await User.findOne({ login, password });
  if (x) return r.res.send('User already exists!');
  const newUser = new User( { login, password });
  try {
  	r.res.status(201).json(await newUser.save());
  } catch (e) {
  	r.res.status(500).end('Unable to perform operation!');
  }
};
