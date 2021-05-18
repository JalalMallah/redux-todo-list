import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from 'redux/actions/actionCreators';

import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

import 'styles/global.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className='wrapper'>
      <h1>Tackle the day! 💪🔥</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
