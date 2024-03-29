import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class List extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dueDate: Date;
}
