const express = require("express");

const Skill = require("../models/skill.model");

const router = express.Router();

//..........APIs for skills............//
// post - create skills
router.post("", async(req, res) => {
    const skill = await Skill.create(req.body);

    return res.status(201).send({skill});
})

// get all skills
router.get("", async (req, res) => {
    const skills = await Skill.find().lean().exec();

    return res.status(200).send({skills});
})

module.exports = router