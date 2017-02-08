import ACTION_TYPES from '../constants/action-types';

export default function(state = { value: 0 }, { type, payload }){
   switch (type) {
     case ACTION_TYPES.COUNTER_INCREMENT:
        return {
          value: state.value + 1
        };
    case ACTION_TYPES.COUNTER_DECREMENT:
       return {
         value: state.value - 1
       }
    default:
      return state;
   }
}
