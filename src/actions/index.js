import { ADD_TODO, UPDATE_ORDER, DELETE_TODO, CLEAR_ALL, EDIT_TODO } from './types';

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

export const clearAll = () => {
  return {
    type: CLEAR_ALL,
  }
}

export const editTodo = (idToEdit, newText) => {
  return {
    type: EDIT_TODO,
    payload: {idToEdit: idToEdit, newText: newText}
  }
}
