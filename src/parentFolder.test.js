import { expect, test } from "vitest";
import parentFolder from "./parentFolder";

test("parentFolder", () => {
  expect(parentFolder()).toBe(__dirname.split("/").slice(0, -1).join("/"));
});
