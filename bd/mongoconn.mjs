import m from 'mongoose';

m.Promise = global.Promise;

const conn = m.createConnection('mongodb://userwriter:retirwresu@151.248.115.32/users');

const UserSchema = new m.Schema({
   "username": {
     "type": "string"
   },
   "password": {
     "type": "string"
   }
}, { "collection": "userlist" }
);

const User = conn.model(null, UserSchema);

export { User };
// экспортируем сразу модель, а могли бы экспортировать mongoose (m)
// там коллекция называется userlist, а не users – поэтому строка 14 и null в строке 17
