import length from "./length";
import presence from "./presence";

export type LengthOptions = {
  min?: number;
  max?: number;
  messageMin?: string;
  messageMax?: string;
};

export default function validateLength(
  val: any,
  { min, max, messageMin, messageMax }: LengthOptions = {}
) {
  const len = length(val);

  if (typeof len === "undefined") return null;

  min = presence(min, 0);
  max = presence(max, Number.MAX_SAFE_INTEGER);

  if (len < min)
    return [presence(messageMin, `must be at least ${min} characters`)];

  if (len > max)
    return [presence(messageMax, `must be at most ${max} characters`)];

  return null;
}
