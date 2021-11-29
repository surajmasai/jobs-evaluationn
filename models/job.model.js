const mongoose = require("mongoose");

// create Schema for jobs
const jobSchema = new mongoose.Schema({
    job_title: { type: String, required: true },
    job_description: { type: String, required: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill", required: false }],
    city: { type: String, required: true },
    wfh: { type: String, required: true },
    notice_period: { type: Number, required: true },
    rating: { type: Number, required: false },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "company", required: false }

}, {
    versionKey: false,
    timestamps: true
})

// connect the jobs schema
const Job = mongoose.model("job", jobSchema);

module.exports = Job;