import { FEATCH_WEATHER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FEATCH_WEATHER:
      return { ...action.payload.data };
    default:
      return state;
  }
};
