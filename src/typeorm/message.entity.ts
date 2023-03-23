import { User } from "./user.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  user: string;
    
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @ManyToOne(() => User, (user)=> user.messages)
  public author: User
}
