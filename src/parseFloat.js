import isBlank from "./isBlank";
import isNumber from "./isNumber";

export default function parseFloat(value, defaultValue) {
  if (isBlank(value)) return numberOrNull(defaultValue);
  if (isNumber(value)) return value;

  const parsed = global.parseFloat(value);

  if (!isNumber(parsed)) return numberOrNull(defaultValue);

  return parsed;
}

function numberOrNull(value) {
  if (isNumber(value)) return value;

  return null;
}
