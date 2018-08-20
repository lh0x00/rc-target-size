/* @flow */

export function handleError(...arg: any[]) {
  console.error('[rc-target-size]', ...arg) // eslint-disable-line no-console
}

export function handleWarning(...arg: any[]) {
  console.warn('[rc-target-size]', ...arg) // eslint-disable-line no-console
}

export function compare(a: number, b: number): boolean {
  return Math.floor(a) === Math.floor(b)
}

export function isFunction(fn: void): boolean {
  return typeof fn === 'function'
}
