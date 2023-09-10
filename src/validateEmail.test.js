import { expect, test } from "vitest";
import validateEmail from "./validateEmail";

test("validateEmail", () => {
  expect(validateEmail("")).toBeNull();
  expect(validateEmail("test@example")).toEqual(["invalid email"]);
  expect(validateEmail("test@example", "please enter proper email")).toEqual([
    "please enter proper email",
  ]);
  expect(validateEmail("test@example.com")).toBeNull();
});
