import isBlank from "./isBlank";

export default function presence(value, defaultValue) {
  return isBlank(value) ? defaultValue : value;
}
