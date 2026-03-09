 import { useState } from 'react';
import { useStore } from './StoreTodo';  
 
export const selectTodos = (state) => state.todos;
export const selectcompletedCount = (state) =>
    state.todos.filter(todo => todo.completed).length;

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function CompletedTodoCount() {
    const completedCount = useStore(selectcompletedCount);
    return <div>Completed Todos: {completedCount}</div>;
}

function AddTodo() { 
    const addTodo = useStore((state) => state.addTodo);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (!text.trim()) return; // previne adicionar tarefas vazias
        addTodo(text);
        setText('');
    };
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}   
 
