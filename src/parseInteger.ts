import isBlank from "./isBlank";
import isNumber from "./isNumber";

function parseInteger(value: any): number | null;

function parseInteger(value: any, defaultValue: number): number;

function parseInteger(value: any, defaultValue?: number) {
  if (isBlank(value)) return numberOrNull(defaultValue);
  if (isNumber(value)) return Math.floor(value);

  const parsed = parseInt(value, 10);

  if (!isNumber(parsed)) return numberOrNull(defaultValue);

  return parsed;
}

export default parseInteger;

function numberOrNull(value: any) {
  if (isNumber(value)) return value;

  return null;
}
