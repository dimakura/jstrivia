/**
 * Delays execution for a given number of seconds.
 */
export default function delayInSeconds(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}
