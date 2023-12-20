import { Injectable } from '@nestjs/common';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MentorEntity } from '../mentors/entities/mentor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MentorsService {
  constructor(
    @InjectRepository(MentorEntity)
    private repository: Repository<MentorEntity>,
  ) {}

  create(createMentorDto: CreateMentorDto) {
    return this.repository.save(createMentorDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  update(id: number, updateMentorDto: UpdateMentorDto) {
    return this.repository.update(id, updateMentorDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
