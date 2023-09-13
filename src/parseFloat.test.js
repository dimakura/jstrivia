import { test, expect } from "vitest";
import parseFloat from "./parseFloat";

test("parseFloat", () => {
  expect(parseFloat("")).toBeNull();
  expect(parseFloat(null)).toBeNull();
  expect(parseFloat("a")).toBeNull();
  expect(parseFloat(Infinity)).toBeNull();
  expect(parseFloat("a", "b")).toBeNull();

  expect(parseFloat(1.1)).toBe(1.1);
  expect(parseFloat("1.44")).toBe(1.44);

  expect(parseFloat(null, 2)).toBe(2);
  expect(parseFloat("a", 2)).toBe(2);
});
