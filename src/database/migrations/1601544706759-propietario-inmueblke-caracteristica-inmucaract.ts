import {MigrationInterface, QueryRunner} from "typeorm";

export class propietarioInmueblkeCaracteristicaInmucaract1601544706759 implements MigrationInterface {
    name = 'propietarioInmueblkeCaracteristicaInmucaract1601544706759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "caracteristica" ("id" SERIAL NOT NULL, "nombre" character varying(35) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_dd5a97e77e6d92a70283926eb95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inmueble" ("id" SERIAL NOT NULL, "direccion" character varying(35) NOT NULL, "tipo" character varying(35) NOT NULL, "precio" double precision NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_debe7756301c207b0a29c472105" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inmubele_caracteristica" ("id" SERIAL NOT NULL, "descripcion" character varying(35) NOT NULL, "caracteristica_id" integer NOT NULL, "inmueble_id" integer NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_66b8b0d8c10948cea1155e5973a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "propietario" ("id" SERIAL NOT NULL, "nombre" character varying(35) NOT NULL, "apellido" character varying(35) NOT NULL, "ci" character varying(10) NOT NULL, "direccion" character varying(100) NOT NULL, "telefono" character varying(10) NOT NULL, "correo" character varying NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_97b6ca7c3a5c40768ec179ad73b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "inmubele_caracteristica" ADD CONSTRAINT "FK_cf80c678052064f4450d3feb694" FOREIGN KEY ("caracteristica_id") REFERENCES "caracteristica"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inmubele_caracteristica" ADD CONSTRAINT "FK_e29675151c16e37e8017291e39f" FOREIGN KEY ("inmueble_id") REFERENCES "inmueble"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmubele_caracteristica" DROP CONSTRAINT "FK_e29675151c16e37e8017291e39f"`);
        await queryRunner.query(`ALTER TABLE "inmubele_caracteristica" DROP CONSTRAINT "FK_cf80c678052064f4450d3feb694"`);
        await queryRunner.query(`DROP TABLE "propietario"`);
        await queryRunner.query(`DROP TABLE "inmubele_caracteristica"`);
        await queryRunner.query(`DROP TABLE "inmueble"`);
        await queryRunner.query(`DROP TABLE "caracteristica"`);
    }

}
