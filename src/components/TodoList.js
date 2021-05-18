import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import * as styles from 'styles/todoList.module.scss';

const TodoList = () => {
  const todos = useSelector(store => store.todos);

  const mappedTodos = todos.map(todo => <TodoItem key={todo.id} {...todo} />);

  return <ul className={styles.list}>{mappedTodos}</ul>;
};

export default TodoList;
