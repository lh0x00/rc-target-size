export function handleError(...arg) {
  console.error('[rc-target-size]', ...arg) // eslint-disable-line no-console
}


export function handleWarning(...arg) {
  console.warn('[rc-target-size]', ...arg) // eslint-disable-line no-console
}

export function compare(a: number, b: number): boolean {
  return Math.floor(a) === Math.floor(b)
}
