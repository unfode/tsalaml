type t<T> =
  | { kind: "none" }
  | { kind: "some", value: T }

function none<T>(): t<T> {
  return { kind: "none" }
}

function some<T>(data: T): t<T> {
  return { kind: "some", value: data }
}

function get<T>(option: t<T>): T {
  switch (option.kind) {
    case "none":
      throw new Error('invalid argument')
    case "some":
      return option.value
  }
}

export { type t, none, some, get }