export interface IDatapackFile {
    getPath(): string;
    getData(): string;
    validate(): void;
}
