import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from '../users/entities/user.entity';

const mockUser: UserEntity = {
  id: 1,
  email: 'test@example.com',
  password: 'hashedPassword',
  fullName: 'Test User',
  role: 'user',
  subscriptions: []
};

const createUserDto = {
  email: 'test@example.com',
  password: 'hashedPassword',
  fullName: 'Test User',
  role: 'user',
  subscriptions: []
};

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    // Mock UsersService
    usersService = {
      findByEmail: jest.fn(),
      create: jest.fn(),
    } as any;

    // Mock JwtService
    jwtService = {
      sign: jest.fn().mockReturnValue('test_token'),
    } as any;

    authService = new AuthService(usersService, jwtService);
  });

  describe('validateUser', () => {
    it('should return user if credentials are valid', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);

      const result = await authService.validateUser(
        'test@example.com',
        'password',
      );
      expect(result).toEqual(mockUser);
    });

    it('should throw if user is not found', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);

      await expect(
        authService.validateUser('test@example.com', 'password'),
      ).rejects.toThrow();
    });

    // Add more tests for different scenarios
  });

  describe('register', () => {
    it('should successfully register a user', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);
      jest
        .spyOn(usersService, 'create')
        .mockResolvedValue({ id: 1, ...createUserDto });

      const result = await authService.register(createUserDto);
      expect(result).toHaveProperty('token');
    });

    it('should throw if email is already in use', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);

      await expect(authService.register(createUserDto)).rejects.toThrow();
    });

    // Add more tests for different scenarios
  });

  describe('login', () => {
    it('should return a token on successful login', async () => {
      const result = await authService.login(mockUser);
      expect(result).toHaveProperty('token');
      expect(result.token).toBe('test_token');
    });

    // Add more tests for different scenarios
  });

  // Add afterEach or other lifecycle methods if needed
});
