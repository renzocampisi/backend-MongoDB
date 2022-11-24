const mongoose = require("mongoose")

const { Schema } = mongoose

const ProvidersSchema = new Schema ({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        minLenght: 5,
        maxLenght: 9
    },
    email: {
        type: String,
        require: true
    },
    typeProvider: {
        type: String,
        require: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Providers", ProvidersSchema)