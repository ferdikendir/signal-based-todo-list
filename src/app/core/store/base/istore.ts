import { Signal } from "@angular/core";

export interface IStore<T> {

    // All state
    select(): Signal<T>;

    // Projected select
    select<R>(project: (state: T) => R): Signal<Partial<T>>;

    // Projected select
    select<R>(project?: (state: T) => R): Signal<T | R>;

    // Update state
    update(mutator: (state: T) => T): void;

    // Set state
    set(newState: T): void;

    // Get state
    get(): T;

    // Subscribe to state changes
    dispacth(observer: (state: T) => void): void;

    // Subscribe to state changes
    onChange(callback: (state: T) => void): void;

    // Clear state
    clear(): void;

}
