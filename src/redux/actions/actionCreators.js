import { ADD_TODO, FETCH_TODOS, REMOVE_TODO } from './types';

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const fetchTodos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: FETCH_TODOS,
        payload: todos,
      })
    )
    .catch(error => console.error('Error: ', error));
};

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
});
