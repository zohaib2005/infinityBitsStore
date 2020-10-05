import { CLEAR_CART, CLEAR_ORDER } from '../constants';

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
