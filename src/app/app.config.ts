import { ApplicationConfig, provideExperimentalZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FlexLayoutModule } from 'ngx-flexible-layout';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(
      FlexLayoutModule
    )
  ]
};

