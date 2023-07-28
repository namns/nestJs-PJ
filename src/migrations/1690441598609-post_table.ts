import { MigrationInterface, QueryRunner } from "typeorm"

export class PostTable1690441598609 implements MigrationInterface {

    name = 'CreatePost1658694616973';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const sql = `CREATE TABLE posts (id integer NOT NULL, title varchar(255) NOT NULL, content varchar(255) NOT NULL, PRIMARY KEY (id))`;
        await queryRunner.query(sql);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE posts`);
    }

}
