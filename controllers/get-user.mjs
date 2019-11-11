'use strict';
import { User } from '../bd/mongoconn';

export default async r => {
    const { username: login } = r.params;
    const result = await User.findOne({ login });
    r.res.render('get-user', result);
}
