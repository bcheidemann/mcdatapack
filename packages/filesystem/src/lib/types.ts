export interface FileSystem {
  writeFileSync(path: string, data: string),
  readFileSync(path: string),
  rmSync(path: string),
}
