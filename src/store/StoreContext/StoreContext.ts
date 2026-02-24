import React from "react";

export type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export type DispatchType = "ADD_TODO" | "TOGGLE_TODO" | "DELETE_TODO";

export type DispatchPayload = {
    ADD_TODO: {
        title: string;
        description: string;
    };
    TOGGLE_TODO: {
        id: number;
    };
    DELETE_TODO: {
        id: number;
    };
};

export type DispatchT = {
    [K in DispatchType]: {
        type: K;
        payload: DispatchPayload[K];
    }
}[DispatchType];
//Tirar o tipo de payload do dispatch, e deixar ele como um objeto genérico, para que possa ser usado em qualquer tipo de ação. O tipo de ação vai ser definido pelo type, e o payload vai ser um objeto genérico, que pode conter qualquer tipo de dado, dependendo da ação. O reducer vai ser responsável por interpretar o tipo de ação e o payload, e atualizar o estado global de acordo com a ação.

export type TodosState = {
    todos: Todo[];
}

// export type StoreContextType = TodosState & {
//     dispatch: React.Dispatch<DispatchT>;
// }

export type StoreContextType = {
    state: TodosState;
    dispatch: React.Dispatch<DispatchT>;
} 

 const initialTodosState: TodosState = {
    todos: [ 
        {
            id: 1, 
            title: "Learn React",
            completed: false,
            description: "Learning React is essential for building modern web applications. It allows developers to create reusable UI components and manage state effectively."
        },
        {
            id: 2, 
            title: "Learn TypeScript",
            completed: false,
            description: "Learning TypeScript is essential for building modern web applications. It allows developers to create reusable UI components and manage state effectively."
        },
    ],
}

export const initialStoreContext: StoreContextType = {
    state: initialTodosState,
    dispatch: () => {},
}

export const StoreContext = React.createContext<StoreContextType>(initialStoreContext);
    



