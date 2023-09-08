export default function isEmpty(value) {
  if (value == null) return true;

  if (typeof value === "undefined") return true;

  if (typeof value === "string" && value.trim() === "") return true;

  if (typeof value === "number" && !isFinite(value)) return true;

  if (Array.isArray(value) && value.length === 0) return true;

  return false;
}
