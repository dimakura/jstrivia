import { expect, test } from "vitest";
import validateLength from "./validateLength";

test("validateLength", () => {
  expect(validateLength("abc", 2, 4)).toEqual(null);
  expect(validateLength("abc", 4, 6)).toEqual([
    "must be at least 4 characters",
  ]);
  expect(validateLength("abc", 1, 2)).toEqual(["must be at most 2 characters"]);
});
