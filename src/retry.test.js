import { vi, test, expect, beforeEach, afterEach, describe } from "vitest";

import retry from "./retry";

beforeEach(vi.useFakeTimers);

afterEach(vi.useRealTimers);

describe("retry", () => {
  test("with backoffs customized", async () => {
    const backoffs = [0, 1, 1, 1];

    let flag = "pending";

    retry(
      () => {
        throw new Error("foo");
      },
      { backoffs }
    )().catch(() => (flag = "failed"));

    for (const backoff of backoffs) {
      expect(flag).toBe("pending");
      await vi.advanceTimersByTime(backoff * 1000);
    }

    expect(flag).toBe("pending");

    await vi.advanceTimersByTime(0);

    expect(flag).toBe("failed");
  });

  test("with canRetry customized", async () => {
    let flag = "pending";

    const canRetry = (_error, attempt) => attempt < 2;

    retry(
      () => {
        throw new Error("foo");
      },
      { canRetry }
    )().catch(() => (flag = "failed"));

    const defaultBackoffs = [0, 1, 2];

    for (const backoff of defaultBackoffs) {
      expect(flag).toBe("pending");
      await vi.advanceTimersByTime(backoff * 1000);
    }

    await vi.advanceTimersByTime(0);
    expect(flag).toBe("failed");
  });
});
