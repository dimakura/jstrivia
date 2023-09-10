import { test, expect } from "vitest";
import isBlank from "./isBlank";

test("isBlank", () => {
  expect(isBlank(null)).toBe(true);
  expect(isBlank(undefined)).toBe(true);
  expect(isBlank("")).toBe(true);
  expect(isBlank(" ")).toBe(true);
  expect(isBlank(1 / 0)).toBe(true);
  expect(isBlank([])).toBe(true);

  expect(isBlank("a")).toBe(false);
  expect(isBlank(0)).toBe(false);
  expect(isBlank([1])).toBe(false);
  expect(isBlank(1)).toBe(false);
  expect(isBlank({})).toBe(false);
  expect(isBlank({ a: 1 })).toBe(false);
  expect(isBlank(new Date())).toBe(false);
});
