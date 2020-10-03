import {MigrationInterface, QueryRunner} from "typeorm";

export class personal21601465505879 implements MigrationInterface {
    name = 'personal21601465505879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personal" ADD "cargo" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personal" DROP COLUMN "cargo"`);
    }

}
