only HTTP/2 support (spdy) + certificates

 (this may cause troubles with deploy! - just for study!)

refactored to controllers


git clone -b step8-class-h2-xprs-controllers https://github.com/GossJS/express_starters1.git x && cd x && yarn

yarn run dev:start

curl -k 'https://localhost:4321/add/34/43'


List

curl -k 'https://localhost:4321/users/'

Add newuser

curl -k -s -i -H 'Content-Type: application/json' 'https://localhost:4321/users/' -d '{"login":"Трэвис","password":"tra"}'

Delete user

curl -s -k  -H 'Content-Type: application/json' 'https://localhost:4321/users' -X DELETE -d '{"login":"Трэвис","password":"tra"}'


Update user (password)

curl -s -k -H 'Content-Type: application/json' 'https://localhost:4321/users/' -X PUT -d '{"login":"Трэвис","password":"atata", "newpass":"iphuck10"}'
