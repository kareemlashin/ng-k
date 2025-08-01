// src/app/app.config.ts
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://your-dsn.ingest.sentry.io/project-id', // Replace with real DSN
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: ['localhost', /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    Sentry.TraceService,
  ],
};
