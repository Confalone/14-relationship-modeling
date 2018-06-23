'use strict';

import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
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
});

export default mongoose.model('team', teamSchema);