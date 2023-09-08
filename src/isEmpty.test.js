import { test, expect } from "vitest";
import isEmpty from "./isEmpty";

test("isEmpty", () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty("")).toBe(true);
  expect(isEmpty(" ")).toBe(true);
  expect(isEmpty(1 / 0)).toBe(true);
  expect(isEmpty([])).toBe(true);

  expect(isEmpty("a")).toBe(false);
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty([1])).toBe(false);
  expect(isEmpty(1)).toBe(false);
  expect(isEmpty({})).toBe(false);
  expect(isEmpty({ a: 1 })).toBe(false);
  expect(isEmpty(new Date())).toBe(false);
});
