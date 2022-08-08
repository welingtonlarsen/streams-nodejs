const mongoose = require('mongoose');

/*
    Scripts to execute into models:
    - db.getCollection("Customer").insertMany([{name: 'Jose', age: 20, address: ObjectId("62f072f65e1db92806a4b915")}, {name: 'Leticia', age: 25, address: ObjectId("62f073005e1db92806a4b916")}]);
    - db.getCollection("Address").insertMany([{city: 'Curitiba', district: 'PR' }, {city: 'Joinville', district: 'SC' }]);
 */

(async function() {
    await mongoose.connect('mongodb://localhost:27017/mongo-sql-migration-poc');

    const address = mongoose.model('Address', mongoose.Schema({
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

    const stream = customer.find().populate('address').cursor();
    stream.on('data', (chunk) => {
        console.log(chunk.toString());
        stream.pause();
        setTimeout(() => stream.resume(), 5000);
    });
}());
