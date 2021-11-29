const express = require("express");

const connect = require("./configs/db");

const companyController = require("./controllers/company.controller");
const jobController = require("./controllers/job.controller");
const skillControlller = require("./controllers/skill.controller");

const app = express();
app.use(express.json());

app.use("/companies", companyController);
app.use("/jobs", jobController);
app.use("/skills", skillControlller);

app.listen(9721, async function () {
    await connect();
    console.log("Listening to port 9721");
})



