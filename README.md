# express_starters1
min starter express code built live in classroom

0. Самая первая версия файла ./src/index.js, содержащая:

  -import

  -app

  -get

  -listen

  создаётся с нуля в папке, которую мы инициализируем, а затем добавляем babel-cli и babel-preset-env

  (это не касается 8.5.0 и ESM - см. step2esm)

  `curl https://kodaktor.ru/babelrc.json -o .babelrc`

  `./node_modules/babel-cli/bin/babel-node.js ./src/index.js`

  1. Затем мы добавляем nodemon и npm-run-all и соответствующие скрипты, а также обработку ошибок. Это ветвь step1 (git checkout step1)

  2. Затем мы добавляем http, http.createServer(app).listen,  логирующее middleware и   middleware отдачи файлов. Это ветвь step2

  `2esm. Вариант для v8.5.0 (скрипт start делает node --experimental-modules ./src/index.mjs ) step2esm`

  3. Затем мы реализуем простейшую параметризацию и простейший роутер. Это ветвь step3esm

  4. Мы тестируем приложение с маршрутами типа /add/5/6 c помощью step4esm
  
   https://kodaktor.ru/g/route.tester

  5. Далее мы имитируем работу с БД, используя в качестве исходного БД kodaktor.ru/j/users
  и lodash (т.к. вещи типа object spread требуют stage-0) - для операций с файлами используется jsonfile-promised в форме async/await - это step5esm
  
  6. Реализация DELETE - step6esm (на этом этапе добавление пользователя это POST /users/:login/:password, а удаление это DELETE /users/:login/:password и удалять можно только   зная пароль удаляемого пользователя - но они все открыты)
  
  7. POST посылает не параметрами URL, а в JSON - step7esm
  
  8. пароль сохраняется в md5 и удалять можно теперь только себя и открытых пользователей, добавляется форма, делающая AJAX-запросы, учитывается CORS  - step8esm

 


  Далее вводится Mongoose и соответствующая замена обращений к файлам на обращения к соединению... model.save()
  
  !Задание после этой части - разработка qLogger API по его спецификации
  
