import { computed, effect, Signal, signal, WritableSignal } from "@angular/core";
import { IStore } from "./istore";

export class Store<T extends object> implements IStore<T> {

    private readonly _state: WritableSignal<T>;

    private _initialState: T;

    private _prevState: T;

    constructor(initialState: T) {
        this._initialState = initialState;
        this._prevState = initialState;
        this._state = signal(initialState);
    }

    // Tüm state'i döner
    select(): Signal<T>;

    // Belirli bir proje fonksiyonuyla türetilmiş state döner
    select<R>(project: (state: T) => R): Signal<R>;

    // State'i seçer
    select<R>(project?: (state: T) => R): Signal<T | R> {

        if (project) {
            return computed(() => project(this._state()));
        }

        return this._state.asReadonly();
    }

    // State'i günceller
    update(mutator: (state: T) => T): void {
        const current = this._state();
        const updated = mutator(current);
        this._state.set(updated);
    }

    // State'i tamamen değiştirir
    set(newState: T): void {
        this._prevState = this._state();
        this._state.set(newState);
    }

    // Mevcut state'i alır
    get(): T {
        return this._state();
    }

    // Önceki state'i alır
    getPrev(): T {
        return this._prevState;
    }

    // State değişikliklerini izler
    onChange(callback: (state: T) => void): void {
        effect(() => {
            callback(this._state());
        });
    }

    // State'i temizler
    clear(): void {
        this._state.set(this._initialState);
    }
}