const express = require("express");

const Company = require("../models/company.model");

const router = express.Router();

// .......... APIs for company............//
// post - create a company
router.post("", async (req, res) => {
    const company = await Company.create(req.body);

    return res.status(201).send({company});
})

// get - all details of the company
router.get("", async (req, res) => {
    const company = await Company.find().lean().exec();

    return res.status(200).send({company});
})

// get - company with most open jobs
router.get("/maxJobsOpen", async (req, res) => {
    const company = await Company.find().sort({job_opening: "desc"}).limit(1).lean().exec();

    return res.status(200).send({company});
})

module.exports = router