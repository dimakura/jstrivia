import { test, expect } from "vitest";

import validateRegex from "./validateRegex";

test("validateRegex", () => {
  expect(validateRegex("abc", /^abc$/)).toBeNull();
  expect(validateRegex("abc", /^abcd$/)).toEqual(["is invalid"]);
  expect(validateRegex("abc", /^abcd$/, "custom message")).toEqual([
    "custom message",
  ]);

  expect(validateRegex("test", /^[a-z]+$/)).toBeNull();
  expect(validateRegex("test123", /^[a-z]+$/)).toEqual(["is invalid"]);
});
