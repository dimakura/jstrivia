import { expect, test } from "vitest";
import isFunction from "./isFunction";

test("isFunction", () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction("")).toBe(false);
});
