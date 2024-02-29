import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserPosition {
  STAFF = 'staff',
  CEO = 'chief_executive_officer',
  CTO = 'chief_technology_officer',
  COO = 'chieft_operating_officer',
}
@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column()
  public date_of_birth: Date;

  @Column()
  public gender: string;

  @Column({ default: false })
  public isActive?: boolean;

  @Column()
  public phone_number: string;

  @Column({ unique: true })
  public email: string;

  @Column({ select: false, nullable: false })
  public password: string;

  @Column({
    type: 'enum',
    enum: UserPosition,
    default: UserPosition.STAFF,
  })
  position?: UserPosition;

  @CreateDateColumn()
  created_at?: Date;
}
