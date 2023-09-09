import { test, expect } from "vitest";
import parseInteger from "./parseInteger";

test("parseInteger", () => {
  expect(parseInteger("")).toBeNull();
  expect(parseInteger(null)).toBeNull();
  expect(parseInteger("a")).toBeNull();
  expect(parseInteger(Infinity)).toBeNull();
  expect(parseInteger("a", "b")).toBeNull();

  expect(parseInteger(1)).toBe(1);
  expect(parseInteger(1.1)).toBe(1);
  expect(parseInteger("1.44")).toBe(1);

  expect(parseInteger(null, 2)).toBe(2);
  expect(parseInteger("a", 2)).toBe(2);
});
