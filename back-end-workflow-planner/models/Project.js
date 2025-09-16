const {Schema, model, default: mongoose} = require("mongoose")

const projectSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    items:{
        type:[Schema.Types.ObjectId],
        ref:"Item"
    }
})

const Project = model("Project", projectSchema)


module.exports = Project