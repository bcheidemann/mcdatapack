import {
  writeFileSync,
  rmSync,
  mkdirSync,
} from 'fs';

export interface FileSystem {
  writeFileSync: typeof writeFileSync,
  rmSync: typeof rmSync,
  mkdirSync: typeof mkdirSync,
}
