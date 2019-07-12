import { css } from '@emotion/core';
import { isFn } from './utils';

const handleFunctions = (args, props) => {
  for (let i = 1; i < args.length; i++) {
    if (isFn(args[i])) {
      args[i] = args[i](props);
    }
  }
  return args;
};

const applyCssConditionally = condition => (...names) => (...args) => props =>
  names.every(name => Boolean(props[name]) === condition) &&
  css(...handleFunctions(args, props));

export const is = applyCssConditionally(true);
export const isNot = applyCssConditionally(false);
