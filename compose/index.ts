
export type Pipe<T0 extends any> = {
    to<T1, TArgs = any>(
        f: (x: T0, ...args: TArgs[]) => T1,
        ...args: TArgs[]
    ): Pipe<T1>
    result(): T0
}

export function pipe<T0 extends any>(data: T0) {
    return {
        to<T1, TArgs = any>(
            f: (x: T0, ...args: TArgs[]) => T1,
            ...args: TArgs[]
        ): Pipe<T1> {
            return pipe(f(data, ...args)) as Pipe<T1>;
        },
        result() { return data; }
    } as Pipe<T0>
}