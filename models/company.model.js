const mongoose = require("mongoose");

// Create Schema for company
const companySchema = new mongoose.Schema({
    company_name: {type: String, required: true},
    company_type: {type: String, required: true},
    company_description: {type: String, required: true},
    job_opening: {type: Number, required: true}
})

// connect the company schema
const Company = mongoose.model("company", companySchema); //companies

module.exports = Company