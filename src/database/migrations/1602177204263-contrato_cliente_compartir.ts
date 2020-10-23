import { MigrationInterface, QueryRunner } from 'typeorm';

export class contratoClienteCompartir1602177204263
  implements MigrationInterface {
  name = 'contratoClienteCompartir1602177204263';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cliente" ("idcliente" SERIAL NOT NULL, "nombre" character varying(35) NOT NULL, "apellido" character varying(35) NOT NULL, "ci" character varying(10) NOT NULL, "direccion" character varying(100) NOT NULL, "telefono" character varying(10) NOT NULL, "correo" character varying(35) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9f6fbdd4ab4aa4431fa02539a46" PRIMARY KEY ("idcliente"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "compartir" ("idcompartir" SERIAL NOT NULL, "fecha_hora" TIMESTAMP NOT NULL, "receptor" character varying(40) NOT NULL, "tipo" character varying(20) NOT NULL, "estado" character(1) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_4158a7ee5dd7cc79013d11a50d5" PRIMARY KEY ("idcompartir"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "contrato" ("idcontrato" SERIAL NOT NULL, "fecha_inicio" date NOT NULL, "fecha_final" date NOT NULL, "tipo_pago" character varying(15) NOT NULL, "tipo" character varying(15) NOT NULL, "entrega_pago" character varying(100) NOT NULL, "address_contrato" character varying(200) NOT NULL, "hash" character varying(200) NOT NULL, "valor" double precision NOT NULL, "moneda" character varying(15) NOT NULL, "estado" character(8) NOT NULL, "personal_id" integer NOT NULL, "inmueble_id" integer NOT NULL, "cliente_id" integer NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_0cb00d89964c7191a80cf2ba218" PRIMARY KEY ("idcontrato"))`,
    );
    //await queryRunner.query(`ALTER TABLE "ubicacion" DROP COLUMN "numero"`);
    //await queryRunner.query(`ALTER TABLE "ubicacion" ADD "numero" character varying(10) NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "contrato" ADD CONSTRAINT "FK_68b468654327fea438dab0cba2f" FOREIGN KEY ("personal_id") REFERENCES "personal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "contrato" ADD CONSTRAINT "FK_42056f76e35a56fdb0a8d77ca94" FOREIGN KEY ("inmueble_id") REFERENCES "inmueble"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "contrato" ADD CONSTRAINT "FK_1d3656b9a06832b90b22ac0280e" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("idcliente") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contrato" DROP CONSTRAINT "FK_1d3656b9a06832b90b22ac0280e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contrato" DROP CONSTRAINT "FK_42056f76e35a56fdb0a8d77ca94"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contrato" DROP CONSTRAINT "FK_68b468654327fea438dab0cba2f"`,
    );
    //await queryRunner.query(`ALTER TABLE "ubicacion" DROP COLUMN "numero"`);
    //await queryRunner.query(`ALTER TABLE "ubicacion" ADD "numero" integer NOT NULL`);
    await queryRunner.query(`DROP TABLE "contrato"`);
    await queryRunner.query(`DROP TABLE "compartir"`);
    await queryRunner.query(`DROP TABLE "cliente"`);
  }
}
