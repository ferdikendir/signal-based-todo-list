import { Store } from "./base/state";

interface CounterState {
    count: number;
    mode2?: number;
    mode3?: number;
    mode4?: number;
}

const initialState: CounterState = {
    count: 0,
    mode2: 0,
    mode3: 0,
    mode4: 0
};

export const counterStore = new Store<CounterState>(initialState);
