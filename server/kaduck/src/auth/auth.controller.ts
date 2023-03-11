import { Controller, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  async getUserProfile(@Headers() headers: any) {
    let authHeader = headers.authorization;
    authHeader = authHeader.replace('Bearer', '');
    console.log(authHeader);
    let data = await this.authService.verifyToken(authHeader);
    console.log(data);
    this.authService.getUserProfile();
  }
}
