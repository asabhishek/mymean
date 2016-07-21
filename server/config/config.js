var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision', 
        rootPath: rootPath,
        port: process.env.PORT | 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://dbusr:dbusr1@ds025603.mlab.com:25603/mymongoasabhishek',
        port: process.env.PORT || 80
    }
}