import ACTION_TYPES from '../constants/action-types';

export function inc(){
  return {
    type : ACTION_TYPES.COUNTER_INCREMENT
  }
}

export function dec(){
  return {
    type : ACTION_TYPES.COUNTER_DECREMENT
  }
}
