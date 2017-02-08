const keykey = require('keykey');

const types = [
  'COUNTER_INCREMENT',
  'COUNTER_DECREMENT'
];

const ACTION_TYPES = keykey(types);
export default ACTION_TYPES;
