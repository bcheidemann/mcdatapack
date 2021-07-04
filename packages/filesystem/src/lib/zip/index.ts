import JSZip = require('jszip');
import { FileSystem } from '../types';

export class ZipFS implements FileSystem {
  private zip = new JSZip();
  public writeFileSync(path: string, data: string) {
    this.zip.file(path, data);
  }
  public rmSync(path: string) {
    this.zip.remove(path);
  }
  public mkdirSync(path: string) {
    this.zip.folder(path);
    return undefined;
  }
  public getZip() {
    return this.zip;
  }
}
