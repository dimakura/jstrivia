import { expect, test } from "vitest";
import length from "./length";

test("length", () => {
  expect(length("")).toBe(0);
  expect(length([])).toBe(0);
  expect(length("test")).toBe(4);
  expect(length([1, 2, 3])).toBe(3);
  expect(length({ length: 100 })).toBe(100);
  expect(length({ length: () => 100 })).toBe(100);

  expect(length({})).toBeUndefined();
  expect(length({ length: "100" })).toBeUndefined();
});
