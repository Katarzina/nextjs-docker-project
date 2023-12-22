import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionEntity } from './entities/subscription.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { ActivityEntity } from '../activities/entities/activity.entity';
import { NotFoundException } from '@nestjs/common';

const mockSubscriptionRepository = {
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  delete: jest.fn(),
};

const mockUserRepository = {
  findOneBy: jest.fn(),
};

const mockActivityRepository = {
  findOneBy: jest.fn(),
};

const mockCreateSubscriptionDto: CreateSubscriptionDto = {
  userId: 1,
  activityId: 1,
};

describe('SubscriptionsService', () => {
  let subscriptionsService: SubscriptionsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SubscriptionsService,
        {
          provide: getRepositoryToken(SubscriptionEntity),
          useValue: mockSubscriptionRepository,
        },
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockUserRepository,
        },
        {
          provide: getRepositoryToken(ActivityEntity),
          useValue: mockActivityRepository,
        },
      ],
    }).compile();

    subscriptionsService = module.get<SubscriptionsService>(SubscriptionsService);
  });

  describe('create', () => {
    it('should create a subscription', async () => {
      mockUserRepository.findOneBy.mockResolvedValue(new UserEntity());
      mockActivityRepository.findOneBy.mockResolvedValue(new ActivityEntity());
      mockSubscriptionRepository.create.mockReturnValue(new SubscriptionEntity());
      mockSubscriptionRepository.save.mockResolvedValue(new SubscriptionEntity());

      const result = await subscriptionsService.create(mockCreateSubscriptionDto);
      expect(result).toBeInstanceOf(SubscriptionEntity);
    });

    it('should throw NotFoundException if user not found', async () => {
      mockUserRepository.findOneBy.mockResolvedValue(null);

      await expect(
        subscriptionsService.create(mockCreateSubscriptionDto)
      ).rejects.toThrow(NotFoundException);
    });

    // Add more test cases as needed
  });

  describe('findAll', () => {
    it('should return an array of subscriptions', async () => {
      mockSubscriptionRepository.find.mockResolvedValue([new SubscriptionEntity()]);
      const result = await subscriptionsService.findAll();
      expect(result).toBeInstanceOf(Array);
    });
    it('should handle no subscriptions available', async () => {
      mockSubscriptionRepository.find.mockResolvedValue([]);
      const result = await subscriptionsService.findAll();
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });

    it('should handle database errors', async () => {
      mockSubscriptionRepository.find.mockRejectedValue(new Error('Database error'));

      await expect(subscriptionsService.findAll()).rejects.toThrow(
        'Database error',
      );
    });
  });

  describe('remove', () => {
    it('should remove a subscription', async () => {
      mockSubscriptionRepository.delete.mockResolvedValue({ affected: 1 });
      const result = await subscriptionsService.remove(1);
      expect(result).toEqual({ affected: 1 });
    });
    it('should throw an error when deletion fails', async () => {
      const mockId = 1;
      jest.spyOn(mockSubscriptionRepository, 'delete').mockRejectedValue(new Error('Deletion failed'));

      await expect(subscriptionsService.remove(mockId)).rejects.toThrow(
        'Deletion failed',
      );
    });
  });

  });
