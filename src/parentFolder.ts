import path from "path";

export default function parentFolder(dir: string, sep: string = path.sep) {
  const parts = dir.split(sep);

  const res = parts.pop();

  if (parts.length > 1 && res === "") parts.pop();

  if (parts.length === 1 && parts[0] === "") return sep;

  return parts.join(sep);
}
