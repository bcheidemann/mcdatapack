export function DatapackFileError(path: string, type: string, message: string) {
  throw new Error([
    `${type} error in ${path}`,
    message,
  ].join('\n'));
}
