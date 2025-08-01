import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { rollbarProviders } from './core/tracking/rollbar.config'; // أو أي اسم للملف
import { bugsnagProviders } from './core/tracking/bugsnag.config';
import { initLogRocket } from './core/tracking/logrocket.config';
import { sentryProviders } from './core/tracking/sentry.config';
import { TrackJsErrorProviders } from './core/tracking/trackjs-error-handler';
initLogRocket()
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ...rollbarProviders,
    ...bugsnagProviders,
    ...sentryProviders,
    ...TrackJsErrorProviders
  ],
};
