type Predicate<T> = ((value: T) => boolean) | T
type Handler<T, R> = (value: T) => R
type Pattern<T, R> = [Predicate<T>, Handler<T, R>]

export const match =
  <T, R>(value: T) =>
  (patterns: Pattern<T, R>[]): R => {
    for (const [predicate, handler] of patterns) {
      if (
        typeof predicate === 'function'
          ? (predicate as (value: T) => boolean)(value)
          : predicate === value
      ) {
        return handler(value)
      }
    }
    throw new Error('No matching pattern found')
  }
