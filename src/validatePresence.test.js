import { test, expect } from "vitest";
import validatePresence from "./validatePresence";

test("validatePresence", () => {
  expect(validatePresence("")).toEqual(["can't be blank"]);
  expect(validatePresence("", "is required")).toEqual(["is required"]);
  expect(validatePresence("a")).toBe(null);
});
