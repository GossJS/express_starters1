import m from 'mongoose';
import dotenv from 'dotenv';

m.Promise = global.Promise;
dotenv.config({ path: './bd/.env' });
const { cnstr } = process.env;

let User;

(async () => {
    const conn = await m.createConnection(
     cnstr, 
     { useNewUrlParser: true },
     e => e ? console.error('STOP') : console.log('Good')
    );

    const UserSchema = new m.Schema({
       "login": {
         "type": "string"
       },
       "password": {
         "type": "string"
       }
    });
    User = conn.model('User', UserSchema);  
})();

export { User };

// экспортируем сразу модель, а могли бы экспортировать mongoose (m)
