import Rollbar from 'rollbar';
import {
  ErrorHandler,
  Injectable,
  InjectionToken,
  Inject,
  Provider
} from '@angular/core';

// إعدادات Rollbar
const rollbarConfig = {
  accessToken: '90670017b1de4e07a09c5b2443200cdb',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

// إنشاء InjectionToken
export const RollbarService = new InjectionToken<Rollbar>('rollbar');

// تهيئة Rollbar
export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}

// ErrorHandler مخصص
@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(error: any): void {
    this.rollbar.error(error?.originalError || error);
  }
}

// providers
export const rollbarProviders: Provider[] = [
  { provide: RollbarService, useFactory: rollbarFactory },
  { provide: ErrorHandler, useClass: RollbarErrorHandler }
];
