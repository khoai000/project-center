/* eslint-disable prettier/prettier */
import { MikroOrmModuleOptions, MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { entities } from 'src/entities';

const config: MikroOrmModuleOptions = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'project-center',
  type: 'mongo',
  clientUrl: 'mongodb://localhost:27017',
  debug: true,
  autoLoadEntities: true,
  ensureIndexes: true,
};

export default config;
