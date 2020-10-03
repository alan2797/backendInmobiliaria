import {MigrationInterface, QueryRunner} from "typeorm";

export class inmuebleMoneda1601570804768 implements MigrationInterface {
    name = 'inmuebleMoneda1601570804768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" ADD "moneda" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" DROP COLUMN "moneda"`);
    }

}
