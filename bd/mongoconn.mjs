import m from 'mongoose';

m.Promise = global.Promise;
let User;

(async () => {
    const conn = await m.createConnection(
     'mongodb://reader:123321@151.248.115.32/readusers', 
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
