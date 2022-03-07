const Fish = require('../models/fish');

module.exports = {
  create,
  deleteCatch
}

async function create(req, res) {

  try {
    const fish = await Fish.findById(req.params.id);
    fish.caught.push({
      username: req.user.username,
      userId: req.user._id
    }); //mutating a document
    await fish.save() // save it
    res.status(201).json({
      data: 'caught added'
    })
  } catch (err) {

    res.status(400).json({
      err
    })
  }

}

async function deleteCatch(req, res) {
  try {

    const fish = await Fish.findOne({
      'caught._id': req.params.id,
      'caught.username': req.user.username
    });
    fish.caught.remove(req.params.id) // mutating a document
    console.log(fish, " <-= fish in delete!")
    // req.params.id is the caught id 
    await fish.save() // after you mutate a document you must save
    res.json({
      data: 'caught removed'
    })
  } catch (err) {
    res.status(400).json({
      err
    })
  }
}