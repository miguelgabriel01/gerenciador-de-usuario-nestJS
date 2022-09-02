import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'miguel',
  password: 'miguel',
  database: 'db_gerenciamento-usuarios',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};