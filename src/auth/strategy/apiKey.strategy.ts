import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './../auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    super({ header: 'apiKey', prefix: '' }, false, async (apikey, done) => {
      try {
        const user = this.authService.validateApiKey(apikey);
        console.log(user);

        if (!user) {
          throw new UnauthorizedException('Invalid API Key');
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    });
  }
}
