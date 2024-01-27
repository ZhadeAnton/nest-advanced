import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from 'src/users/pipes/userPipe';
import { createUserSchema } from 'src/users/schemas/createUserSchema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  @UsePipes(new ZodValidationPipe(createUserSchema))
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
