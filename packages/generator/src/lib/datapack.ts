import { FileSystem, MemoryFS } from '@mcdatapack/filesystem';
import { IDatapackFile } from './types';

export class Datapack {
  private files: IDatapackFile[] = [];

  constructor(private fs: FileSystem = new MemoryFS()) {}

  public addFile(file: IDatapackFile) {
    this.files.push(file);
  }

  public removeFile(file: IDatapackFile) {
    const path = file.getPath();
    this.files = this.files.filter(file => file.getPath() === path);
  }

  public emit() {
    for (const file of this.files) {
      const path = file.getPath(),
            data = file.getData();
      this.fs.writeFileSync(path, data);
    }
  }
}
