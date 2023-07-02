import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/modules/repositories/users.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}
}
