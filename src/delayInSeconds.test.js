import { vi, test, expect, beforeEach, afterEach } from "vitest";

import delayInSeconds from "./delayInSeconds";

beforeEach(vi.useFakeTimers);

afterEach(vi.useRealTimers);

test("delayInSeconds", async () => {
  let flag = false;

  delayInSeconds(1.4).then(() => {
    flag = true;
  });

  expect(flag).toBe(false);

  await vi.advanceTimersByTime(1000);

  expect(flag).toBe(false);

  await vi.advanceTimersByTime(400);

  expect(flag).toBe(true);
});
