(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    //name, lastName, docType, documentId, address, telephone, username, password, rol

    var UserSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        docType: {
            type: Number,
            required: true
        },
        documentId: {
            type: Number,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        telephone: Number,
        address: String,
    });

    module.exports = mongoose.model('users', UserSchema);
})();