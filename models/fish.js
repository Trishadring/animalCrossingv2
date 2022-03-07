const mongoose = require('mongoose');

const caughtSchema = mongoose.Schema({

  username: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});


const fishSchema = new mongoose.Schema({
  id: Number,
  bug_name: String,
  price: String,
  img: String,
  shadow_size: String,
  hemisphere: {
    north: {
      January: Boolean,
      February: Boolean,
      March: Boolean,
      April: Boolean,
      May: Boolean,
      June: Boolean,
      July: Boolean,
      August: Boolean,
      October: Boolean,
      September: Boolean,
      November: Boolean,
      December: Boolean,
    },
    south: {
      January: Boolean,
      February: Boolean,
      March: Boolean,
      April: Boolean,
      May: Boolean,
      June: Boolean,
      July: Boolean,
      August: Boolean,
      October: Boolean,
      September: Boolean,
      November: Boolean,
      December: Boolean,
    }
  },
  time: String,
  time_available: {
    h_0: Boolean,
    h_1: Boolean,
    h_2: Boolean,
    h_3: Boolean,
    h_4: Boolean,
    h_4: Boolean,
    h_5: Boolean,
    h_6: Boolean,
    h_7: Boolean,
    h_8: Boolean,
    h_9: Boolean,
    h_10: Boolean,
    h_11: Boolean,
    h_12: Boolean,
    h_13: Boolean,
    h_14: Boolean,
    h_15: Boolean,
    h_16: Boolean,
    h_17: Boolean,
    h_18: Boolean,
    h_19: Boolean,
    h_20: Boolean,
    h_21: Boolean,
    h_22: Boolean,
    h_23: Boolean
  },
  caught: [caughtSchema] // < one post has many likes
});


module.exports = mongoose.model('Fish', fishSchema);