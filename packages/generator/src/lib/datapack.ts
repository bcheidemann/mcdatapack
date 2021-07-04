export interface FileSystem {
  writeFileSync(path: string, data: string),
  readFileSync(path: string),
}

export class Datapack {
  constructor(private fs: FileSystem) {}
}
