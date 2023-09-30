import isBlank from "./isBlank";
import isNumber from "./isNumber";

function parseInteger(value: any): number | null;

function parseInteger(value: any, defaultValue: number): number;

function parseInteger(value: any, defaultValue?: number) {
  const returnDefaultValue = numberOrNull(defaultValue);

  if (isBlank(value)) return returnDefaultValue;
  if (isNumber(value)) return Math.floor(value);

  const parsed = parseInt(value, 10);

  if (!isNumber(parsed)) return returnDefaultValue;

  return Math.floor(parsed);
}

export default parseInteger;

function numberOrNull(value: any) {
  if (isNumber(value)) return Math.floor(value);

  return null;
}
