import { ErrorHandler, Injectable, Provider } from '@angular/core';
import { TrackJS } from 'trackjs';

@Injectable()
export class TrackJsErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Error caught by TrackJsErrorHandler:', error);
    TrackJS.track(error);
  }
}
export const TrackJsErrorProviders: Provider[] = [
  { provide: ErrorHandler, useClass: TrackJsErrorHandler }

];
