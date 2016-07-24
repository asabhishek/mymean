var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption.js');

var userSchema = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName: {type:String, required:'{PATH} is required!'},
    username: {
        type: String,
        required: '{PATH} is required!',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles: [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}

var User = mongoose.model('User', userSchema);
function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Abhishek');
            User.create({ firstName: 'Abhishek', lastName: 'Singh', username: 'Abhishek', salt: salt, hashed_pwd: hash, roles: ["admin"] });
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Jon')
            User.create({ firstName: 'Jon', lastName: 'Smith', username: 'Jon', salt: salt, hashed_pwd: hash });
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;
