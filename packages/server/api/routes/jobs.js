const express = require("express");
const router = express.Router();
const database = require("../../scripts/knex");

// Validations
const validateJob = require("../../validation/validateJob");
const validateJobUpdate = require("../../validation/validateJobUpdate");

// Get a list of all jobs with all info
router.get("/all", (req, res) => {
  const errors = {};
  database
    .select("*")
    .from("jobs")
    .then(job => {
      if (job.length) {
        res.json(job);
      } else {
        errors.emptyDatabase = "No jobs in the database at the moment";
        res.json(errors);
      }
    })
    .catch(err => {
      errors.db = "Invalid request";
      res.status(400).json(errors);
    });
});

// Get a list of latest jobs with only card details info (mandatory offset)
// if offset is set to 0 => latest 30 jobs will be returned
// if offset is set to x => latest jobs offset by x * 30 will be returned
router.get("/latest/:offset", (req, res) => {
  const errors = {};
  const offset = req.params.offset ? req.params.offset * 31 : 0;
  database
    .select(
      "id",
      "title",
      "body",
      "org_name",
      "org_code",
      "job_type",
      "country",
      "city",
      "original_posting_date",
      "closing_date",
      "origin_source"
    )
    .from("jobs")
    .offset(offset)
    .limit(31)
    .then(jobs => {
      if (jobs.length) {
        const result = [];
        for (let job of jobs) {
          const bodyLength = job.body ? job.body.length : 0;
          job.body = bodyLength
            ? job.body.slice(0, job.body.length < 1500 ? job.body.length : 1500) // limits the job description to 1500 chars
            : job.body;
          result.push(job);
        }
        res.json(result);
      } else {
        errors.emptyDatabase = "No jobs in the database at the moment";
        res.json(errors);
      }
    })
    .catch(err => {
      errors.db = "Invalid request";
      res.status(400).json(errors);
    });
});

// Get all information for a specific job
router.get("/id/:id", (req, res) => {
  const errors = {};
  const searchId = req.params.id;
  database
    .select("*")
    .from("jobs")
    .where({ id: searchId })
    .then(job => {
      res.status(200).json(job);
    })
    .catch(err => {
      errors.noMatch = "Not found. No job matches that id";
      res.status(400).json(errors);
    });
});

// Delete a specific job
router.delete("/id/:id", (req, res) => {
  const errors = {};
  const deleteId = req.params.id;
  database("jobs")
    .del()
    .where({ id: deleteId })
    .then(job => {
      if (job) {
        res.status(200).json(`Job with id ${deleteId} deleted successfully`);
      } else {
        errors.noMatch = "Impossible to delete. No job matches that id";
        res.status(400).json(errors);
      }
    })
    .catch(err => {
      errors.db = "Invalid request";
      res.status(400).json(errors);
    });
});

// Update a specific job
router.put("/id/:id", (req, res) => {
  const { errors, isValid } = validateJobUpdate(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { duplicate, closing_date, expired } = req.body;
  const updateId = req.params.id;

  return database("jobs")
    .update({
      duplicate,
      closing_date,
      expired,
      updated_at: "now"
    })
    .where({ id: updateId })
    .then(() => {
      return database
        .select("*")
        .from("jobs")
        .where({ id: updateId })
        .then(updatedJob => {
          res
            .status(200)
            .json({ message: "Job updated successfully", updatedJob });
        })
        .catch(err => {
          errors.db = "Invalid request";
          res.status(400).json(errors);
        });
    })
    .catch(err => {
      errors.db = "Invalid request";
      res.status(400).json(errors);
    });
});

// Add a job in the database
router.post("/add", (req, res) => {
  const { errors, isValid } = validateJob(req.body);
  if (!isValid) return res.status(400).json(errors);

  const {
    job_title,
    job_description,
    how_to_apply,
    organization_name,
    organization_code,
    organization_type,
    job_type,
    theme_type,
    career_type,
    experience_type,
    location_type,
    country,
    region_type,
    city,
    links,
    duplicate,
    closing_date,
    number_of_views,
    expired
  } = req.body;

  database("jobs")
    .returning("id", "job_title", "country")
    .insert({
      job_title,
      job_description,
      how_to_apply,
      organization_name,
      country
    })
    .then(job => {
      res.status(200).json(job);
    })
    .catch(err => {
      errors.db = "Invalid request";
      res.status(400).json(errors);
    });
});

module.exports = router;
