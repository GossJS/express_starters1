# express_starters1
min starter express code build live in classroom

1. Самая первая версия файла ./src/index.js, содержащая:

  -import
  
  -app
  
  -get
  
  -listen
  
  создаётся с нуля в папке, которую мы инициализируем, а затем добавляем babel-cli и babel-preset-env
  
  `curl https://kodaktor.ru/babelrc.json -o .babelrc`
  
  `./node_modules/babel-cli/bin/babel-node.js ./src/index.js`
  
  2. Затем мы добавляем nodemon и npm-run-all и соответствующие скрипты, а также обработку ошибок. Это ветвь step1
  
  3. Затем мы добавляем http, http.createServer(app).listen и  логирующее middleware 
  
  4. Затем мы реализуем простейшую параметризацию и после этого задание API-калькулятор
  
  
  Далее следующий репозиторий: middleware отдачи файлов, морган, парсер body и реализуем post. (по мотивам step6)
  
