import isBlank from "./isBlank";

const defaultMessage = "can't be blank";

export default function validatePresence(value, message) {
  if (isBlank(value)) {
    return [message || defaultMessage];
  }

  return null;
}
