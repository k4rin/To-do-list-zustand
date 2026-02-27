import {create} from 'zustand';

const  initialAvailableTodo: Todo[] = [
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Learn TypeScript', completed: true},
    {id: 3, text: 'Build a To-Do List App', completed: false},
];
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};



type StoreState = {
    todos: Todo[];
    availableTodo: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

export const useStoreTodo = create<StoreState>((set) => ({
    todos: [],
    availableTodo: initialAvailableTodo,
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
    deleteTodo: (id) => set((state) => ({todos: state.todos.filter((todo) => todo.id !== id)})),
    toggleTodo: (id) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }))
}));