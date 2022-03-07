const Fish = require('../models/fish');

const {
  v4: uuidv4
} = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET;

module.exports = {
  index,

}




async function index(req, res) {
  try {
    const fish = await Fish.find({});
    res.status(200).json({
      fish: fish
    });
  } catch (err) {
    res.status(400).json({
      err
    });
  }
}
