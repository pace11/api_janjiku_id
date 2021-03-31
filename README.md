# BE-TEST
be-test with hapi.js

## How to run
 - `npm install` or `yarn install` 
 - also makesure to correctly setup db in local. configuration in folder `config/config.json`. environtment `development`
 - run migration with command `npx sequelize-cli db:migrate` and run seeder with command `npx sequelize-cli db:seed:all` and makesure all data seeder has successfully entered the database 
 - run the server with `npm start`. this command automaticaly run file `app.js`
 - checkout in client side or postman with access url `http://localhost:6100`

## Features
- [x] Nodejs and Hapijs
- [x] Sequelize ORM
## User Login Test
| Email | Password |
| ------ | ------ |
| `administrator@mailinator.com` | `admin` |
| `pace@mailinator.com` | `pace` |