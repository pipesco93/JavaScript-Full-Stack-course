// if(process.env.NODE_ENV!='production'){
//   require('dotenv').config()
// console.log(process.env)
// }

require('dotenv').config()
console.log(process.env.password)

module.exports = {
  // "development": {
  //   "username": process.env.USERNAME,
  //   "password": process.env.PASSWORD,
  //   "database": process.env.DATABASE,
  //   "host": process.env.HOST,
  //   "dialect": process.env.DIALECT
  // },
  "development": {
    "username": "root",
    "password": "pipesco93",
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
