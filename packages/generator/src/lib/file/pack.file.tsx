import { DatapackFile } from '.';
import { join } from 'path';
import { RecursivePartial } from '@mcdatapack/types';

export type IPackFileData = RecursivePartial<{
  pack: {
    pack_format: number;
    description: string;
  };
  language: Record<
    string,
    {
      name: string;
      region: string;
      bidirectional: boolean;
    }
  >;
}>;

export class PackFile extends DatapackFile {
  private path = join('pack.mcmeta');
  constructor(private data: IPackFileData) {
    super();
  }
  getPath(): string {
    return this.path;
  }
  getData(): string {
    return JSON.stringify(this.data);
  }
}
