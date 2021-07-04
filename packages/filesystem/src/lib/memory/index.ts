import { FileSystem } from '../types';

export class MemoryFS implements FileSystem {
  private files: Record<string, string> = {};
  public writeFileSync(path: string, data: string) {
    this.files[path] = data;
  }
  public readFileSync(path: string) {
    const data = this.files[path];
    if (data === undefined)
      throw new Error(`File at path (${path}) does not exist.`);
    return data;
  }
  public rmSync(path: string) {
    if (this.files[path] === undefined) throw new Error(`No such file ${path}.`);
    this.files[path] = undefined;
  }
}
