import {MigrationInterface, QueryRunner} from "typeorm";

export class personal1601413509441 implements MigrationInterface {
    name = 'personal1601413509441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personal" ("id" SERIAL NOT NULL, "nombre" character varying(35) NOT NULL, "apellido" character varying(35) NOT NULL, "ci" character varying NOT NULL, "direccion" character varying(100) NOT NULL, "telefono" character varying NOT NULL, "correo" character varying NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_7a849a61cdfe8eee39892d7b1b1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "personal"`);
    }

}
