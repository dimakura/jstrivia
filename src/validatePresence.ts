import isBlank from "./isBlank";

const defaultMessage = "can't be blank";

export default function validatePresence(value: any, message?: string) {
  if (isBlank(value)) {
    return [message || defaultMessage];
  }

  return null;
}
