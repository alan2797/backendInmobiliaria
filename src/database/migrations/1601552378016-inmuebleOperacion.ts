import {MigrationInterface, QueryRunner} from "typeorm";

export class inmuebleOperacion1601552378016 implements MigrationInterface {
    name = 'inmuebleOperacion1601552378016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" ADD "operacion" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inmueble" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "inmueble" ADD "tipo" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "inmueble" ADD "tipo" character varying(35) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inmueble" DROP COLUMN "operacion"`);
    }

}
