// bugsnag.config.ts
import Bugsnag from '@bugsnag/js';
import BugsnagPerformance from '@bugsnag/browser-performance';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import { ErrorHandler } from '@angular/core';

// Start Bugsnag services
Bugsnag.start({ apiKey: '154b17e4fdef887a8a8e19a0d4618577' });
BugsnagPerformance.start({ apiKey: '154b17e4fdef887a8a8e19a0d4618577' });

// Export factory
export function errorHandlerFactory(): ErrorHandler {
  return new BugsnagErrorHandler();
}

// Export providers
export const bugsnagProviders = [
  { provide: ErrorHandler, useFactory: errorHandlerFactory },
];
