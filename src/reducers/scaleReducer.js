import { TRIGGER_SCALE, REVERSE_SCALE } from '../actions/types';

export default (state = false, action) => {
  switch(action.type) {
    case TRIGGER_SCALE:
      return true;
    case REVERSE_SCALE:
      return false;
    default:
      return state;
  }
}
