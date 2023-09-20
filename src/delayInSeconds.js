/**
 * Delays execution for a given number of seconds.
 */
export default function delayInSeconds(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}
