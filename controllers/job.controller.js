const express = require("express");

const Job = require("../models/job.model");

const router = express.Router();

//................ APIs for jobs..................//
// post - create a job
router.post("", async (req, res) => {
    const job = await Job.create(req.body);

    return res.status(201).send({ job });
})

// get all jobs 
router.get("", async (req, res) => {
    const jobs = await Job.find().populate("skills").populate("company").lean().exec();

    return res.status(200).send({ jobs });
})

// get all jobs in a city with a skill
router.get("/cityAndSkill", async (req, res) => {
    const job = await Job.find({ $and: [{ city: "Banglore" }, { skill: "JavaScript" }] }).populate("skills").populate("company").lean().exec();

    return res.status(200).send({ job });
})



// get all jobs available for work from home
router.get("/workFromHome", async (req, res) => {
    const job = await Job.find({ wfh: "yes" }).populate("skills").populate("company").lean().exec();

    return res.status(200).send({ job });
})


module.exports = router