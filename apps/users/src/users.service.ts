import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
// import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    // private readonly emailService: EmailService,
  ) {}

  //register dto
  async register(regitserDto: RegisterDto) {
    const { email, name, password } = regitserDto;
    const user = {
      email,
      password,
      name,
    };

    return user;
  }

  //login
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };
    return user;
  }

  //get all user service
  async getUsers() {
    const user = [];
    return user;
  }
}
