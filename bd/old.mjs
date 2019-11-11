import m from 'mongoose';

m.Promise = global.Promise;

const conn = m.createConnection('mongodb://reader:12332@151.248.115.32/readusers');

const UserSchema = new m.Schema({
   "login": {
     "type": "string"
   },
   "password": {
     "type": "string"
   }
});

const User = conn.model("User", UserSchema);

export { User };
// Unhandled error в случае отсутствия коллбэка