import length from "./length";
import presence from "./presence";

export default function validateLength(val: any, min?: number, max?: number) {
  const len = length(val);

  if (typeof len === "undefined") return null;

  min = presence(min, 0);
  max = presence(max, Number.MAX_SAFE_INTEGER);

  if (len < min) return [`must be at least ${min} characters`];
  if (len > max) return [`must be at most ${max} characters`];

  return null;
}
