type t<T, U> =
  | { kind: "left", value: T }
  | { kind: "right", right: U }

function left<T, U>(value: T): t<T, U> {
  return { kind: "left", value }
}

function right<T, U>(right: U): t<T, U> {
  return { kind: "right", right }
}

export { type t, left, right }