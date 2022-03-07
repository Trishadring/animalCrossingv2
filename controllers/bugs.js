const Bugs = require('../models/bugs');

const {
  v4: uuidv4
} = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET;

module.exports = {
  index
}




async function index(req, res) {
  try {
    // this populates the user when you find the bugs
    // so you'll have access to the users information
    // when you fetch teh bugs
    const bugs = await Bugs.find({}).exec();
    res.status(200).json({
      bugs: bugs
    });
  } catch (err) {
    res.status(400).json({
      err
    });
  }
}