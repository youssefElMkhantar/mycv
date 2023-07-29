var DataSource = require('typeorm').DataSource;
var dbConfig = require('./sqlite-connection-options');

console.log('hhhhhhhhhhhhhhh', dbConfig);

module.exports = new DataSource(dbConfig);
