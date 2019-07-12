const isTypeOf = (type, arg) => typeof arg === type;
export const isFn = arg => isTypeOf('function', arg);
