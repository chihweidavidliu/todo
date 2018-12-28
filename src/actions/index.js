import { ADD_TODO, UPDATE_ORDER, DELETE_TODO } from './types';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const updateTodoOrder = (oldIndex, newIndex) => {
  return {
    type: UPDATE_ORDER,
    payload: { oldIndex: oldIndex, newIndex: newIndex }
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}
