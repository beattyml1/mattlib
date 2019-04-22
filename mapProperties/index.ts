
export function mapProperties<T extends {[k in keyof  T]: U}, R = any, U = any>(
    x: T,
    map: (key: string, value: U) => R
) {
    return Object.keys(x).reduce((result, key) => ({
        ...result,
        [key]: map(key, x[key])
    }), {}) as { [k in keyof T]: R };
}