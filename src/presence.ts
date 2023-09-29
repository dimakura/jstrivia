import isPresent from "./isPresent";

export default function presence<T>(
  value: T | null | undefined,
  defaultValue: T
): T {
  return isPresent(value) ? value : defaultValue;
}
