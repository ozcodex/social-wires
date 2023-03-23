import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService, private configService: ConfigService
  ) { }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOneBy({ username })
  }

  async validateUser(username: string, password: string) {
    const user = await this.findOneByUsername(username);
    if (!user) return null;
    const passwordValid = password === user.password
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }
  async login(user: LoginDto) {
    const payload = { username: user.username };
    const access_token = this.jwtService.sign(payload)
    return {
      access_token,
      'expires_in': this.configService.get('JWT_EXPIRATION'),
    }
  }

}