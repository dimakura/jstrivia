import isPresent from "./isPresent";

type SquishOptions = {
  onOneLine?: boolean;
};

export default function squish(text: string, options: SquishOptions = {}) {
  const joiner = options.onOneLine ? " " : "\n";

  return text.split("\n").map(squishLine).filter(isPresent).join(joiner);
}

function squishLine(text: string) {
  return text.replace(/\s+/g, " ").trim();
}
