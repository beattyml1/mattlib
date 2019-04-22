import {mapProperties} from "@beattyml1/map-properties";
import {SecondParam} from "@beattyml1/func-types";

export type Dispatch_ =
    (type: string, payload?: any, options?: any) => Promise<any>;

export type Store_ = {
    dispatch: Dispatch_;
}

export type Action = (s, p) => any;

export type PayloadFromActionFunc<T extends Action> = SecondParam<T>;

export type ActionDispatchers<T extends { [k in keyof T]: Action }> =  {
    [k in keyof T]: (payload: PayloadFromActionFunc<T[k]>) => Promise<ReturnType<T[k]>>;
}

// export type ActionParams<T extends { [k in keyof T]: Action }> = {
//     [k in keyof T]: [k, (payload: PayloadFromActionFunc<T[k]>) => void];
// }
//
// export function actionDispatchParamsForAction<A extends Action>(a: A) {
//     return (p: PayloadFromActionFunc<A>) => [a.name, p]
// }

export function actionDispatcher<T extends { [k in keyof T]: Action }, S=any>(store: Store_, actions: T) {
    return mapProperties(actions, key => (payload) => store.dispatch(key, payload)) as ActionDispatchers<T>;
}
//
// export function actionsParams<T extends { [k in keyof T]: Action }, S=any>(store: Store_, actions: T) {
//     return mapProperties(actions, key => (p: PayloadFromActionFunc<>) => [key, actionDispatchParamsForAction(actions[key])(p)]) as ActionParams<T>;
// }