import { FileSystem, MemoryFS } from '@mcdatapack/filesystem';
import { IDatapackFile } from './types';
import { join, dirname } from 'path';

export interface IDatapackOptions {
  fs?: FileSystem,
  dir?: string,
}

export class Datapack {
  private files: IDatapackFile[] = [];
  private fs: FileSystem;
  private dir: string;

  constructor(options: IDatapackOptions = {}) {
    const { fs, dir } = options;
    this.fs = fs || new MemoryFS();
    this.dir = dir || process.cwd();
  }

  public addFile(file: IDatapackFile) {
    this.files.push(file);
  }

  public removeFile(file: IDatapackFile) {
    this.files = this.files.filter(eachFile => eachFile !== file);
  }

  public emit() {
    for (const file of this.files) {
      file.validate();
      const path = file.getPath(),
            data = file.getData();
      const outPath = join(this.dir, path);
      const outDir = dirname(outPath);
      this.fs.mkdirSync(outDir, { recursive: true });
      this.fs.writeFileSync(outPath, data);
    }
  }
}
