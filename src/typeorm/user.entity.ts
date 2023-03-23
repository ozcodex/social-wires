import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Index, OneToMany } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: '',
  })
  fullname: string;

  @Index({ unique: true })
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Exclude()
  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @OneToMany(() => Message, (message) => message.author)
    messages: Message[]

}
