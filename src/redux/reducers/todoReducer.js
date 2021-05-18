import { ADD_TODO, FETCH_TODOS, REMOVE_TODO } from 'redux/actions/types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case FETCH_TODOS:
      return [...action.payload];
    case REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
