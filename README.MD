added pug, controllers, class router

git clone -b step8-class-pug-xprs-controllers https://github.com/GossJS/express_starters1.git x && cd x && yarn 

yarn run dev:start

List

curl http://localhost:4321/users/

Add newuser

curl -k -s -i -H 'Content-Type: application/json' 'http://localhost:4321/users/' -d '{"login":"Трэвис","password":"tra"}'

HTTP/1.1 201 Created

Update user

curl -s -k -H 'Content-Type: application/json' 'http://localhost:4321/users/' -X PUT -d '{"login":"Трэвис","password":"tra", "newpass":"iphuck10"}'

Delete user

curl -s -k -H 'Content-Type: application/json' 'http://localhost:4321/users' -X DELETE -d '{"login":"Трэвис","password":"iphuck10"}'


