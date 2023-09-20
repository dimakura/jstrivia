import { test, expect } from "vitest";
import presence from "./presence";

test("presence", () => {
  expect(presence("foo")).toBe("foo");
  expect(presence("foo", "bar")).toBe("foo");
  expect(presence("", "bar")).toBe("bar");
  expect(presence(null, "bar")).toBe("bar");
});
