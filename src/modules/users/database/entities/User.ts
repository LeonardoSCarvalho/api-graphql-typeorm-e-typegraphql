import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
   Field,
  ObjectType,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";

@Entity("users")
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column({ unique: true })
  @Field()
  email: string;

  password: string;

  @Column()
  @Field()
  password_hash: string;

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await bcrypt.hash(this.password, 8);
  }
}
