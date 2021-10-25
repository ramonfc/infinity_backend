(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    //name, lastName, docType, documentId, address, telephone, username, password, rol

    var UserSchema = new Schema({
        name: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        docType: {
            type: String,
            required: false
        },
        documentId: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        rol: {
            type: String,
            required: false
        },
        telephone: String,
        address: String,
        
        status: {
            type: String,
            required: false
        }
    });

    module.exports = mongoose.model('users', UserSchema);

})();
