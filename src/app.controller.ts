import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { HeaderApiKeyGuard } from './auth/guard/apiKey.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(HeaderApiKeyGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
