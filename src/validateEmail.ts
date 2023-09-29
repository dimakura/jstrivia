import isBlank from "./isBlank";

const defaultMessage = "invalid email";

const regex = /^[a-z][a-z0-9_.]*@[a-z][a-z0-9_.]*\.[a-z]+$/i;

export default function validateEmail(value: string, message?: string) {
  if (isBlank(value)) return null;

  if (regex.test(value)) return null;

  return [message || defaultMessage];
}
