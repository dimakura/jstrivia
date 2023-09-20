import path from "path";

export default function parentFolder(dir = __dirname) {
  return dir.split(path.sep).slice(0, -1).join(path.sep);
}
