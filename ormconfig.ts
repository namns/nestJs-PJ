import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'nestjs_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: true,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*{.ts,.js}'],
});
