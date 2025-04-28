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

const createHistoryItem = (partial: Omit<TodoHistory, 'state'>): TodoHistory => ({
    ...partial
});


//#region Todo Actions

export const completeTodo = (id: number) => {

    const updatedTodo = todoStore.snapshot().todos.find(todo => todo.id === id);

    const historyItem: TodoHistory = createHistoryItem({
        type: StateChangeType.UPDATE,
        updatedItem: { ...updatedTodo as Todo, completed: !updatedTodo?.completed },
        description: `${!updatedTodo?.completed ? 'Completed' : 'Uncompleted'} a todo`
    });

    todoStore.update(state => ({
        ...state,
        todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
        history: [historyItem, ...state.history]
    }));
};

export const addTodo = (title: string) => {

    const addedTodo = { id: Date.now(), title, completed: false };

    const historyItem: TodoHistory = createHistoryItem({
        type: StateChangeType.CREATE,
        createdItem: addedTodo,
        description: 'Added a todo'
    });

    todoStore.update(state => ({
        ...state,
        todos: [addedTodo, ...state.todos],
        history: [historyItem, ...state.history]
    }));
};

export const deleteTodo = (id: number) => {

    const deletedTodo = todoStore.snapshot().todos.find(todo => todo.id === id);

    const historyItem: TodoHistory = createHistoryItem({
        type: StateChangeType.DELETE,
        deletedItem: deletedTodo,
        description: 'Deleted a todo'
    });

    todoStore.update(state => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id),
        history: [historyItem, ...state.history]
    }));
};

export const undoLastChange = () => {
    todoStore.update(state => {
        const [lastHistory, ...restHistory] = state.history;

        if (!lastHistory) return state; // Hiç history yoksa dokunma

        switch (lastHistory.type) {
            case StateChangeType.CREATE:
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== lastHistory.createdItem?.id),
                    history: restHistory
                };
            case StateChangeType.UPDATE:
                return {
                    ...state,
                    todos: state.todos.map(todo =>
                        todo.id === lastHistory.updatedItem?.id
                            ? { ...todo, completed: !lastHistory.updatedItem?.completed }
                            : todo
                    ),
                    history: restHistory
                };
            case StateChangeType.DELETE:
                return {
                    ...state,
                    todos: [lastHistory.deletedItem!, ...state.todos],
                    history: restHistory
                };
            default:
                return state;
        }
    });
};

//#endregion
