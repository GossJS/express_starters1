mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone -b files https://github.com/GossJS/express_starters1.git . && yarn install

yarn start

curl localhost:4321/write/something

curl localhost:4321/read
