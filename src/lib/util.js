/* @flow */

export function handleError(...arg: any[]) {
  console.error('[rc-target-size]', ...arg) // eslint-disable-line no-console
}

export function handleWarning(...arg: any[]) {
  console.warn('[rc-target-size]', ...arg) // eslint-disable-line no-console
}

export const compare = (a: number, b: number): boolean => a === b

export const isFunction = (fn: void): boolean => typeof fn === 'function'
