import { expect, test } from "vitest";
import validateLength from "./validateLength";

test("validateLength", () => {
  expect(validateLength("abc", { min: 2, max: 4 })).toEqual(null);

  expect(validateLength("abc", { min: 4, max: 6 })).toEqual([
    "must be at least 4 characters",
  ]);

  expect(validateLength("abc", { min: 1, max: 2 })).toEqual([
    "must be at most 2 characters",
  ]);

  expect(
    validateLength("abc", { min: 4, messageMin: "custom message" })
  ).toEqual(["custom message"]);

  expect(
    validateLength("abc", { max: 2, messageMax: "custom message" })
  ).toEqual(["custom message"]);
});
