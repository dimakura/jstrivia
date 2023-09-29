import isBlank from "./isBlank";
import isNumber from "./isNumber";

export default function parseFloat(
  value: string,
  defaultValue?: number
): number | null {
  if (isBlank(value)) return numberOrNull(defaultValue);
  if (isNumber(value)) return value;

  const parsed = global.parseFloat(value);

  if (!isNumber(parsed)) return numberOrNull(defaultValue);

  return parsed;
}

function numberOrNull(value: any) {
  if (isNumber(value)) return value;

  return null;
}
