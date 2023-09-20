import { expect, test } from "vitest";
import parentFolder from "./parentFolder";

test("parentFolder", () => {
  expect(parentFolder("/home/dimitri")).toBe("/home");
  expect(parentFolder("/home/dimitri/")).toBe("/home");
  expect(parentFolder("/home/dimitri/Downloads")).toBe("/home/dimitri");
  expect(parentFolder("/home/dimitri/Downloads/")).toBe("/home/dimitri");
  expect(parentFolder("/home")).toBe("/");
  expect(parentFolder("/home/")).toBe("/");
  expect(parentFolder("/")).toBe("/");

  expect(parentFolder("C:\\Users\\dimitri", "\\")).toBe("C:\\Users");
  expect(parentFolder("C:\\", "\\")).toBe("C:");
});
