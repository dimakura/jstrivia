import isBlank from "./isBlank";
import isFunction from "./isFunction";

export default function length(val: any): number | undefined {
  let len;

  if (val === null || typeof val === "undefined") return;

  if (isFunction(val.length)) {
    len = val.length();
  } else if (typeof val.length !== "undefined") {
    len = val.length;
  }

  if (typeof len === "number") {
    return len;
  }
}
