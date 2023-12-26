import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FacebookLoginProvider } from './providers/auth/facebook-login-provider';
import { GoogleLoginProvider } from './providers/auth/google-login-provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('381218047818720'),
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '520087266908-nhanco3jr4hmkffpuirpc0ahobu7qf35.apps.googleusercontent.com'
            ),
          },
        ],
      },
    },
  ],
};
