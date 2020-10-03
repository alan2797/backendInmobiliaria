import {MigrationInterface, QueryRunner} from "typeorm";

export class funciolalidadYdetalle1601476648524 implements MigrationInterface {
    name = 'funciolalidadYdetalle1601476648524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "funcionalidad" ("id" SERIAL NOT NULL, "nombre" character varying(35) NOT NULL, "descripcion" character varying(100), "url" character varying, "tipo" character varying(100) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_621227737c2f41dfe4211fcc3ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rol_funcionalidad" ("id" SERIAL NOT NULL, "visible" character varying(35) NOT NULL, "rol_id" integer NOT NULL, "funcionalidad_id" integer NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_3067f26fa7b2b268bf852b02f38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rol_funcionalidad" ADD CONSTRAINT "FK_e903adf21728777219a3b0a230c" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rol_funcionalidad" ADD CONSTRAINT "FK_ac45c2ae964880cb169613bc544" FOREIGN KEY ("funcionalidad_id") REFERENCES "funcionalidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rol_funcionalidad" DROP CONSTRAINT "FK_ac45c2ae964880cb169613bc544"`);
        await queryRunner.query(`ALTER TABLE "rol_funcionalidad" DROP CONSTRAINT "FK_e903adf21728777219a3b0a230c"`);
        await queryRunner.query(`DROP TABLE "rol_funcionalidad"`);
        await queryRunner.query(`DROP TABLE "funcionalidad"`);
    }

}
