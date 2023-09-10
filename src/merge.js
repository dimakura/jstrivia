export default function merge(...args) {
  const result = [];

  args.forEach((arg) => accumulate(result, arg));

  return result;
}

function accumulate(result, arg) {
  if (Array.isArray(arg)) {
    arg.forEach((item) => accumulate(result, item));
  } else if (arg !== null && typeof arg !== "undefined") {
    result.push(arg);
  }
}
