// header-api-key.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class HeaderApiKeyGuard extends AuthGuard('headerapikey') {}
