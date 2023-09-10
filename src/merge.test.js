import { expect, test } from "vitest";
import merge from "./merge";

test("merge", () => {
  expect(merge(1, 2, 3)).toEqual([1, 2, 3]);
  expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  expect(merge([1, 2], [3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  expect(merge(null, "", undefined)).toEqual([""]);
});
