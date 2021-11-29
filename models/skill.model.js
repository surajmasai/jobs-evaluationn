const mongoose = require("mongoose");

// create schema for skills
const skillSchema = new mongoose.Schema({
    skill:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true
})

// connect the skills schema
const Skill = mongoose.model("skill", skillSchema);

module.exports = Skill