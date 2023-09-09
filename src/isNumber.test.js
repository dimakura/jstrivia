import { test, expect } from "vitest";
import isNumber from "./isNumber";

test("isNumber", () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(0)).toBe(true);
  expect(isNumber(1.1)).toBe(true);

  expect(isNumber("1")).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber(Infinity)).toBe(false);
});
