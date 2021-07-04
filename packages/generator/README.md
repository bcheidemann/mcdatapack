# generator

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test generator` to execute the unit tests via [Jest](https://jestjs.io).

## Usage

```typescript
import { ZipFS } from '@mcdatapack/filesystem';
import { Datapack, PackFile, FunctionFile } from '@mcdatapack/generator';
import { writeFileSync } from 'fs';

const outfile = '~/datapack_test.zip';
const zipfs = new ZipFS();

const datapack = new Datapack({
  dir: '/',
  fs: zipfs,
});
const packFile = new PackFile({
  pack: {
    pack_format: 7,
    description: 'Test Pack'
  }
});
datapack.addFile(packFile);
const functionFile = new FunctionFile({
  name: 'testfunc',
  namespace: 'datapack_test',
  function: 'tellraw @a {"text": "testfunc", "color": "#00FFFF"}',
});
datapack.addFile(functionFile);
datapack.emit();

const zipFile = zipfs.getZip();
zipFile.generateAsync({ type: 'nodebuffer' }).then(buffer => {
  console.log(buffer.toString('ascii'))
  writeFileSync(outfile, buffer);
});

```
