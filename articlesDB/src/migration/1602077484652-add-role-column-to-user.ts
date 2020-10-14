import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addRoleColumnToUser1602077484652 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("user");
    const roleColumn = new TableColumn({ name: "role", type: "int" });
    await queryRunner.addColumn(usersTable, roleColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("user");
    await queryRunner.dropColumn(usersTable, "role");
  }
}
