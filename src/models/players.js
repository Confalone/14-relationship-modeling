'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const playerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
  },
  number: {
    type: Number,
    required: true,
  },
  teamID: {type: Schema.types.ObjectID, required: true},
});

export default mongoose.model('player', playerSchema);