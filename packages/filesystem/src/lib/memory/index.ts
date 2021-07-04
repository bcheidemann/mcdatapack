import { FileSystem } from '../types';

export class MemoryFS implements FileSystem {
  private files: Record<string, string> = {};
  public writeFileSync(path: string, data: string) {
    this.files[path] = data;
  }
  public rmSync(path: string) {
    if (this.files[path] === undefined) throw new Error(`No such file ${path}.`);
    this.files[path] = undefined;
  }
  public mkdirSync() {
    return undefined;
  }
}
