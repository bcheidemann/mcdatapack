import { DatapackFile } from '.';
import { join } from 'path';
import { RecursivePartial } from '@mcdatapack/types';
import { DatapackFileError } from '../error';

export type IFunctionFileData = RecursivePartial<{
  namespace: string,
  name: string,
  function: string,
}>;

export class FunctionFile extends DatapackFile {

  constructor(
    private data: IFunctionFileData = {},
  ) {
    super();
  }

  public getPath(): string {
    return join('data', this.data.namespace, 'functions', `${this.data.name}.mcfunction`);
  }

  public getData(): string {
    return this.data.function || '';
  }

  public validate() {
    if (!this.data?.namespace || !this.data?.name) {
      const partialPath = join('data', this.data.namespace || '[NAMESPACE]', 'functions', `${this.data.name || '[NAME]'}.mcfunction`);
      DatapackFileError(partialPath, 'validation', 'Missing namespace and/or function name.');
    }
  }
  
  public setNamespace(namespace: string) {
    this.data.namespace = namespace;
  }
  
  public setName(name: string) {
    this.data.name = name;
  }
  
  public setFunction(func: string) {
    this.data.function = func;
  }

}
