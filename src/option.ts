type t<T> =
  | { kind: "none" }
  | { kind: "some", value: T }

function none<T>(): t<T> {
  return { kind: "none" }
}

function some<T>(data: T): t<T> {
  return { kind: "some", value: data }
}

export { type t, none, some }