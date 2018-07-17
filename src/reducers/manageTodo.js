export default function manageTodo(state = { todos: [] }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { todo: state.todo.concat(action.todo.text) };
    default:
      return state;
  }
}
