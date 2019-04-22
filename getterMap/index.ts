
import {SecondParam} from "@beattyml1/func-types";

export type Store_ = {
    getters: any;
}




export function gettersForStore<T extends { [k in keyof T]: (...args) => any }, S=any>(store: Store_, getters: T) {
    return store.getters as { [k in keyof T]: ReturnType<T[k]> }
}