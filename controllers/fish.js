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
    // this populates the user when you find the fish
    // so you'll have access to the users information
    // when you fetch teh fish
    const fish = await Fish.find({});
    // console.log(res.fish, 'fish')
    // console.log(res.json, 'json')
    res.status(200).json({
      fish: fish
    });
  } catch (err) {
    res.status(400).json({
      err
    });
  }
}
