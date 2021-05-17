import { ACTION_ONE, ACTION_TWO } from 'redux/actions/types';

const initialState = {
  value: 'initial value',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ONE:
      return {
        value: 'some specific value for ACTION_ONE',
      };
    case ACTION_TWO:
      return {
        value: 'some specific value for ACTION_TWO',
      };
    default:
      return state;
  }
};

export default mainReducer;
