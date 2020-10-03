import {MigrationInterface, QueryRunner} from "typeorm";

export class propietarioInmubele1601551709935 implements MigrationInterface {
    name = 'propietarioInmubele1601551709935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" ADD "propietario_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inmueble" ADD CONSTRAINT "FK_3f5fdd80b0cb9c89cd2203c531b" FOREIGN KEY ("propietario_id") REFERENCES "propietario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" DROP CONSTRAINT "FK_3f5fdd80b0cb9c89cd2203c531b"`);
        await queryRunner.query(`ALTER TABLE "inmueble" DROP COLUMN "propietario_id"`);
    }

}
