import type { DispatchT,  TodosState } from "./StoreContext";


type reducerProps = {
    state: TodosState;
    action: DispatchT;
}

type ReducerAction = (props: reducerProps) => TodosState;


export const reducer: ReducerAction = (
  {state, action} 
 ) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(), // Pega o timestamp atual como ID único
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
}