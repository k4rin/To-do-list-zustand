import {create} from 'zustand';
import { persist } from 'zustand/middleware';


type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};
type StoreState = {
    todos: Todo[];
    addTodo: (title: string, description: string) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const  initialAvailableTodo: Todo[] = [
    {id: 1, title: 'Learn React', description: 'Learn the basics of React', completed: false},
    {id: 2, title: 'Learn TypeScript', description: 'Learn TypeScript', completed: true},
    {id: 3, title: 'Build a To-Do List App', description: 'Build a simple To-Do List application', completed: false},
];

export const useStoreTodo = create<StoreState>() ( 
    persist((set) => ({
    todos: initialAvailableTodo,
    addTodo: (title, description) =>
        set((state) => ({
    todos: [
      ...state.todos,
      {
        id: Date.now(),
        title,
        description,
        completed: false
      }
    ]
  })),
    deleteTodo: (id) => 
        set((state) => ({
            todos: state.todos.filter((todo) => 
                todo.id !== id)})),
    toggleTodo: (id) => 
        set((state) => ({ 
            todos: state.todos.map((todo) =>
                 todo.id === id 
            ? {...todo, completed: !todo.completed}
            : todo)
    }))
}), { name: 'todo-store' })
);
