import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/actions/actionCreators';

import * as styles from 'styles/todoForm.module.scss';

const TodoForm = () => {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => setInputText(e.target.value);
  const handleFormSubmit = e => {
    e.preventDefault();
    if (!inputText) return;

    const newTodo = {
      id: ~~(Math.random() * 1000),
      title: inputText,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setInputText('');
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h3>Add New Todo Item:</h3>
      <input type='text' value={inputText} onChange={handleInputChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
