import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'redux/actions/actionCreators';

import * as styles from 'styles/todoItem.module.scss';

const TodoItem = ({ completed, id, title }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const dispatch = useDispatch();

  const handleChange = e => {
    setIsChecked(prev => !prev);
  };

  const handleClick = id => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={styles.todoItem}>
      <input type='checkbox' id={id} checked={isChecked} onChange={handleChange} />
      <label htmlFor={id}>{title}</label>
      <button className={styles.deleteTodo} onClick={() => handleClick(id)}>
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
