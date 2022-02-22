import axios from 'axios';

const getTodoList = async () => {
  let todolist = await axios
    .get('http://localhost:5000/api/todolist')
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return todolist;
};

const changeCompletedStatus = async (todoId) => {
  return await axios
    .put(`http://localhost:5000/api/todolist/${todoId}`)
    .then((response) => response.status)
    .catch((error) => {
      console.log(error);
    });
};

const createTodo = async (taskName) => {
  return await axios
    .post('http://localhost:5000/api/todolist/new', { task: taskName })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteTodo = async (todoId) => {
  return await axios
    .delete(`http://localhost:5000/api/todolist/${todoId}`)
    .then((response) => response.status)
    .catch((error) => {
      console.log(error);
    });
};

const deleteCompletedTodos = async () => {
  return await axios
    .delete('http://localhost:5000/api/todolist')
    .then((response) => response.status)
    .catch((error) => {
      console.log(error);
    });
};
const ApiClient = {
  getTodoList,
  changeCompletedStatus,
  deleteCompletedTodos,
  createTodo,
  deleteTodo,
};

export default ApiClient;
