import { IDatapackFile } from '../types';

export abstract class DatapackFile implements IDatapackFile {
    abstract getPath(): string;
    abstract getData(): string;
}
