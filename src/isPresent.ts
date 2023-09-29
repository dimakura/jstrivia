import isBlank from "./isBlank";

export default function isPresent<T>(value: T): value is NonNullable<T> {
  return !isBlank(value);
}
