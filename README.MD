added process.env.PORT || for Heroku etc

git clone -b step8-class-pug-h2-xprs-controllers https://github.com/GossJS/express_starters1.git x && cd x && yarn

yarn run dev:start

List

curl https://localhost:4321/users/

Add newuser

curl -k -s -i -H 'Content-Type: application/json' 'https://localhost:4321/users/' -d '{"login":"Трэвис","password":"tra"}'

Delete user

curl -s -k -H 'Content-Type: application/json' 'https://localhost:4321/users' -X DELETE -d '{"login":"Трэвис","password":"tra"}'
