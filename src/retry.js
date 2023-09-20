import delayInSeconds from "./delayInSeconds";

const anyRetry = (_error, _attempt) => true;

const defaultBackoffs = [0, 1, 2, 4, 8, 16];

export default function retry(fn, opts = {}) {
  const { backoffs = defaultBackoffs, canRetry = anyRetry } = opts || {};

  return async function () {
    for (let i = 0; i < backoffs.length; i++) {
      const isLast = i === backoffs.length - 1;

      try {
        await delayInSeconds(backoffs[i]);
        return await fn();
      } catch (error) {
        if (!isLast && canRetry(error, i)) continue;
        throw error;
      }
    }
  };
}
