import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dueDate: Date;
}
