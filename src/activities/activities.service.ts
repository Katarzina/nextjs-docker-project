import { Injectable } from '@nestjs/common';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from 'src/activities/entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityEntity)
    private repository: Repository<ActivityEntity>,
  ) {}

  create(dto: CreateActivityDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.repository.update(id, updateActivityDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
