export type FirstParam<T> = T extends (x: infer U, ...args: any[]) => void ? U : never;
export type SecondParam<T> = T extends (x, y: infer U, ...args: any[]) => void ? U : never;
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;