type t<T, E> =
  | { kind: "ok", value: T }
  | { kind: "error", error: E }

function ok<T, E>(value: T): t<T, E> {
  return { kind: "ok", value }
}

function error<T, E>(error: E): t<T, E> {
  return { kind: "error", error }
}

export { type t, ok, error }