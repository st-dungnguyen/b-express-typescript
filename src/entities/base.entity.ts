import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_at', default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
  createdAt: string;

  @Column({ name: 'updated_at', default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
  updatedAt: string;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: string;
}
