# express_starters1
min starter express code built live in classroom

0. Самая первая версия файла ./src/index.js, содержащая:

  -import

  -app

  -get

  -listen

  создаётся с нуля в папке, которую мы инициализируем, а затем добавляем babel-cli и babel-preset-env

  `curl https://kodaktor.ru/babelrc.json -o .babelrc`

  `./node_modules/babel-cli/bin/babel-node.js ./src/index.js`

  1. Затем мы добавляем nodemon и npm-run-all и соответствующие скрипты, а также обработку ошибок. Это ветвь step1 (git checkout step1)

  2. Затем мы добавляем http, http.createServer(app).listen,  логирующее middleware и   middleware отдачи файлов. Это ветвь step2
  
  `2esm. Вариант для v8.5.0 (скрипт start делает node --experimental-modules ./src/index.mjs ) step2esm`

  3. Затем мы реализуем простейшую параметризацию и после этого - задание API-калькулятор. Это ветвь step3

  https://kodaktor.ru/g/route.tester



  Далее следующий репозиторий: , морган, парсер body и реализуем post. (по мотивам step6)
