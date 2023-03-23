import { User } from "./user.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  fullname: string;
  
  @Column()
  content: string;
    
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @ManyToOne(() => User)
  public user: User
}
