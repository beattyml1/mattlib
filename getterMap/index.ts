import {mapProperties} from "@beattyml1/map-properties";
import {SecondParam} from "@beattyml1/func-types";

export type Store_ = {
    getters: any;
}

export function gettersForStore<T extends { [k in keyof T]: (...args) => any }, S=any>(store: Store_, getters: T) {
    return mapProperties(getters, key => store.getters[key]) as { [k in keyof T]: ReturnType<T[k]> }
}