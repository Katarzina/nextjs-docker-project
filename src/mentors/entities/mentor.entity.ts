import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mentors')
export class MentorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;
};


