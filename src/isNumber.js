export default function isNumber(value) {
  if (typeof value !== "number") return false;

  return Number.isFinite(value);
}
