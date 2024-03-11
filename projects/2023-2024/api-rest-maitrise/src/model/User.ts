import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

export interface IUser {
  email: string;
  id: number;
}

@Table
export class User extends Model implements IUser {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Unique
  @Column
  email!: string;
}
