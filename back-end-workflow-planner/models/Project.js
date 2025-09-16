const {Schema, model, default: mongoose} = require("mongoose")

const projectSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Item"
    }
})

const Project = model("Project", projectSchema)


module.exports = Project