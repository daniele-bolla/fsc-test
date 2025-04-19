// Currying
export const curry = (fn: Function) => {
  const arity = fn.length
  return function curried(...args: any[]) {
    if (args.length >= arity) {
      return fn(...args)
    }
    return (...moreArgs: any[]) => curried(...args, ...moreArgs)
  }
}

// Partial application
export const partial =
  (fn: Function, ...args: any[]) =>
  (...moreArgs: any[]) =>
    fn(...args, ...moreArgs)

// Safe property access
export const prop = curry((key: string, obj: Record<string, any>) => obj?.[key])
