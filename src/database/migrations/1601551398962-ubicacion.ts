import {MigrationInterface, QueryRunner} from "typeorm";

export class ubicacion1601551398962 implements MigrationInterface {
    name = 'ubicacion1601551398962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ubicacion" ("id" SERIAL NOT NULL, "calle" character varying(35) NOT NULL, "numero" character varying(10) NOT NULL, "descripcion" character varying(100), "ciudad" character varying(30) NOT NULL, "latitud" character varying(16), "longitud" character varying(16), "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6ed79468fe4f565d8be642742a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "inmueble" ADD "ubicacion_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inmueble" ADD CONSTRAINT "UQ_a6c32ac8685e8f59d68c2b3c95d" UNIQUE ("ubicacion_id")`);
        await queryRunner.query(`ALTER TABLE "inmueble" ADD CONSTRAINT "FK_a6c32ac8685e8f59d68c2b3c95d" FOREIGN KEY ("ubicacion_id") REFERENCES "ubicacion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmueble" DROP CONSTRAINT "FK_a6c32ac8685e8f59d68c2b3c95d"`);
        await queryRunner.query(`ALTER TABLE "inmueble" DROP CONSTRAINT "UQ_a6c32ac8685e8f59d68c2b3c95d"`);
        await queryRunner.query(`ALTER TABLE "inmueble" DROP COLUMN "ubicacion_id"`);
        await queryRunner.query(`DROP TABLE "ubicacion"`);
    }

}
