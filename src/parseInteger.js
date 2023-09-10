import isBlank from "./isBlank";
import isNumber from "./isNumber";

export default function parseInteger(value, defaultValue) {
  if (isBlank(value)) return numberOrNull(defaultValue);
  if (isNumber(value)) return Math.floor(value);

  const parsed = parseInt(value, 10);

  if (!isNumber(parsed)) return numberOrNull(defaultValue);

  return parsed;
}

function numberOrNull(value) {
  if (isNumber(value)) return value;

  return null;
}
