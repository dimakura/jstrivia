export default function merge(...args: any[]): any[] {
  const result: any[] = [];

  args.forEach((arg) => accumulate(result, arg));

  return result;
}

function accumulate(result: any[], arg: any) {
  if (Array.isArray(arg)) {
    arg.forEach((item) => accumulate(result, item));
  } else if (arg !== null && typeof arg !== "undefined") {
    result.push(arg);
  }
}
