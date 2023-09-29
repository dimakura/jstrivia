export default function isNumber(value: any): value is number {
  if (typeof value !== "number") return false;

  return Number.isFinite(value);
}
