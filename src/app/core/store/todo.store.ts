import { Store } from "./base/state";
import { StateChangeType } from "./base/state-change.enum";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoHistory {
    type: StateChangeType;
    description?: string;
    state?: TodoState;
    updatedItem?: Todo;
    deletedItem?: Todo;
    createdItem?: Todo;
}

interface TodoState {
    todos: Todo[];
    history: TodoHistory[];
}

const initialState: TodoState = {
    todos: [],
    history: [
        {
            type: StateChangeType.INITIAL,
            description: 'Initial todo list',
            state: {
                todos: [],
                history: []
            },
            createdItem: undefined,
            deletedItem: undefined,
            updatedItem: undefined
        }
    ]
};

const savedState = localStorage.getItem('todo-state');

export const todoStore = new Store<TodoState>(savedState ? JSON.parse(savedState) : initialState);

export const todos = todoStore.select(state => state.todos);

export const history = todoStore.select(state => state.history);

//#region Todo Actions

export const completeTodo = (id: number) => {

    const updatedTodo = todos().find(todo => todo.id === id);

    const historyItem: TodoHistory = {
        type: StateChangeType.UPDATE,
        updatedItem: { ...updatedTodo as Todo, completed: !updatedTodo?.completed },
        description: `${!updatedTodo?.completed ? 'Completed' : 'Uncompleted'} a todo`
    };

    history().unshift(historyItem);

    todoStore.update(state => ({
        ...state,
        todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
        history: [...state.history]
    }));
};

export const addTodo = (title: string) => {

    const addedTodo = { id: todos().length + 1, title, completed: false };

    todos().unshift(addedTodo);

    const historyItem: TodoHistory = {
        type: StateChangeType.CREATE,
        createdItem: addedTodo,
        description: 'Added a todo'
    };

    history().unshift(historyItem);

    todoStore.update(state => ({
        ...state,
        todos: [...state.todos],
        history: [...state.history]
    }));
};

export const deleteTodo = (id: number) => {

    const deletedTodo = todos().find(todo => todo.id === id);

    const historyItem: TodoHistory = {
        type: StateChangeType.DELETE,
        deletedItem: deletedTodo,
        description: 'Deleted a todo'
    };

    history().unshift(historyItem);

    todoStore.update(state => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id),
        history: [...state.history]
    }));
};

//#endregion
