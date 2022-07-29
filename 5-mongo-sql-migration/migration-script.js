const mongoose = require('mongoose');

(async function() {
    await mongoose.connect('mongodb://localhost:27017/mongo-sql-migration-poc');

    const address = mongoose.model('Customer', mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        city: String,
        district: String
    }, {collection : 'Address'}));

    const customer = mongoose.model('Customer', mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        name: String,
        age: Number,
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address"
        },
    }, {collection : 'Customer'}));

    const stream = customer.find().cursor();
    stream.on('data', (chunk) => {
        console.log(chunk.toString())
    })

}());

