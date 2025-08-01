import { APP_INITIALIZER, ApplicationConfig, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import * as Sentry from "@sentry/angular";

export const sentryProviders= [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ];