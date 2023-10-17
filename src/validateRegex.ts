import presence from "./presence";

const defaultMessage = "is invalid";

export default function validateRegex(
  value: any,
  regex: RegExp,
  message?: string
) {
  if (regex.test(value)) {
    return null;
  }

  return [presence(message, defaultMessage)];
}
