'use strict';
import { User } from '../bd/mongoconn';

export default async r => {
    const { username } = r.params;
    const result = await User.findOne({ username });
    r.res.render('get-user', result);
}
