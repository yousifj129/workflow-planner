const { Schema, model, default: mongoose } = require("mongoose")

const itemSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
    positionX: {
        type: Number,
        default: 0
    },
    positionY: {
        type: Number,
        default: 0
    },
    width: {
        type: Number,
        default: 200
    },
    height: {
        type: Number,
        default: 200
    },
    image: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    },
    type: {
        type: String,
        enum: ['text', 'image'],
        default: 'text'
    }
})

const Item = model("Item", itemSchema)


module.exports = Item