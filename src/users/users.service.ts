import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(registerDto: RegisterDto) {
    const user = { id: Date.now(), ...registerDto };
    this.users.push(user);
    return user;
  }

  findOne(email: string) {
    return this.users.find((user) => user.email === email);
  }

  validateUser(email: string, password: string) {
    const user = this.findOne(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
