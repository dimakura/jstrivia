import { expect, test } from "vitest";
import squish from "./squish";

test("squish", () => {
  expect(squish(" foo bar ")).toBe("foo bar");
  expect(squish("  foo  bar ")).toBe("foo bar");
  expect(squish("  foo \n bar  ")).toBe("foo\nbar");
  expect(squish("  foo \n bar  ", { onOneLine: true })).toBe("foo bar");
});
