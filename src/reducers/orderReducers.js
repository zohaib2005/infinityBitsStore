import { CLEAR_ORDER } from '../constants';

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CLEAR_ORDER:
      return { order: null };
    default:
      return state;
  }
};
export { orderReducer };
