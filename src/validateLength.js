import length from "./length";

export default function validateLength(val, min, max) {
  const len = length(val);

  if (typeof len === "undefined") return null;

  min = min || 0;
  max = max || Number.MAX_SAFE_INTEGER;

  if (len < min) return [`must be at least ${min} characters`];
  if (len > max) return [`must be at most ${max} characters`];

  return null;
}
