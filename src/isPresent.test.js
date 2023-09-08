import { test, expect } from "vitest";
import isPresent from "./isPresent";

test("isPresent", () => {
  expect(isPresent(null)).toBe(false);
  expect(isPresent(undefined)).toBe(false);
  expect(isPresent("")).toBe(false);
  expect(isPresent(" ")).toBe(false);
  expect(isPresent(1 / 0)).toBe(false);
  expect(isPresent([])).toBe(false);

  expect(isPresent("a")).toBe(true);
  expect(isPresent(0)).toBe(true);
  expect(isPresent([1])).toBe(true);
  expect(isPresent(1)).toBe(true);
  expect(isPresent({})).toBe(true);
  expect(isPresent({ a: 1 })).toBe(true);
  expect(isPresent(new Date())).toBe(true);
});
