'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const teamSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  mascot: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  player: [{
    type: Schema.Types.ObjectsId, ref: 'player',
  }],
});

export default mongoose.model('team', teamSchema);