import isBlank from "./isBlank";
import isNumber from "./isNumber";

function parseFloat(value: any): number | null;

function parseFloat(value: any, defaultValue: number): number;

function parseFloat(value: any, defaultValue?: number): number | null {
  if (isBlank(value)) return numberOrNull(defaultValue);
  if (isNumber(value)) return value;

  const parsed = global.parseFloat(value);

  if (!isNumber(parsed)) return numberOrNull(defaultValue);

  return parsed;
}

export default parseFloat;

function numberOrNull(value: any) {
  if (isNumber(value)) return value;

  return null;
}
