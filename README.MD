git clone https://github.com/GossJS/express_starters1.git x && cd x && git checkout step2esm

или

git clone -b step2esm https://github.com/GossJS/express_starters1.git x && cd x

yarn install

yarn start

curl localhost:4321/add/34/43


List

curl http://localhost:4321/users/

Add newuser

curl -s -i -H 'Content-Type: application/json' 'http://localhost:4321/users/' -d '{"login":"Илья","password":"1234"}'

Delete user

curl http://localhost:4321/users/%D0%98%D0%BB%D1%8C%D1%8F/1234 -X DELETE
