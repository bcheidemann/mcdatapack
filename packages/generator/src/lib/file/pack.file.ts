import { DatapackFile } from '.';
import { join } from 'path';
import { RecursivePartial } from '@mcdatapack/types';
import { DatapackFileError } from '../error';

export type IPackLanguage = Partial<{
  name: string;
  region: string;
  bidirectional: boolean;
}>;

export type IPackFileData = RecursivePartial<{
  pack: {
    pack_format: number;
    description: string;
  };
  language: Record<string, IPackLanguage>;
}>;

export class PackFile extends DatapackFile {
  
  private path = join('pack.mcmeta');

  constructor(
    private data: IPackFileData = {
      pack: {},
      language: {},
    }
  ) {
    super();
  }

  public getPath(): string {
    return this.path;
  }

  public getData(): string {
    return JSON.stringify(this.data, null, 2);
  }

  public validate() {
    if (!this.data?.pack?.pack_format) {
      DatapackFileError(this.path, 'validation', 'Missing pack format.');
    }
  }

  public setPackFormat(format: number) {
    this.data.pack.pack_format = format;
  }
  
  public setDescription(description: string) {
    this.data.pack.description = description;
  }

  public addLanguage(language: string, data: IPackLanguage) {
    this.data.language[language] = data;
  }
}
