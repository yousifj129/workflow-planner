const {Schema, model, default: mongoose} = require("mongoose")

const itemSchema = new Schema({
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    positionX:{
        type:mongoose.Schema.Types.Number,
        default:0
    },
    positionY:{
        type:mongoose.Schema.Types.Number,
        default:0
    },
    width:{
        type:mongoose.Schema.Types.Number,
        default:200
    },
    height:{
        type:mongoose.Schema.Types.Number,
        default:200
    },
    image:{
        type:mongoose.Schema.Types.String,
        required: false
    },
    text:{
        type:mongoose.Schema.Types.String,
        required: false
    },
    type:{
        type:mongoose.Schema.Types.String,
        enum : ['text','image'],
        default: 'text'    
    }
})

const Item = model("Item", itemSchema)


module.exports = Item