import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.log('[LOG]', message, ...optionalParams);
    }
    // Optionally send to remote log server here
  }

  info(message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.info('[INFO]', message, ...optionalParams);
    }
    // Optionally send to remote log server here
  }

  warn(message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.warn('[WARN]', message, ...optionalParams);
    }
    // Optionally send to remote log server here
  }

  error(message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.error('[ERROR]', message, ...optionalParams);
    }
    // Optionally send to remote log server or Sentry here
  }

  debug(message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.debug('[DEBUG]', message, ...optionalParams);
    }
    // Optionally send to remote log server here
  }

  trace(message: any, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.trace('[TRACE]', message, ...optionalParams);
    }
    // Optionally send to remote log server here
  }

  table(tabularData: any, properties?: string[]) {
    if (isDevMode()) {
      console.table(tabularData, properties);
    }
    // Optionally send to remote log server here
  }
  /**
   * Logs an assertion failure if the condition is false.
   */
  assert(condition: boolean, message?: string, ...optionalParams: any[]) {
    if (isDevMode()) {
      console.assert(condition, message, ...optionalParams);
    }
  }

  /**
   * Logs a stack trace from the point where it's called.
   */
  stackTrace(label?: string) {
    if (isDevMode()) {
      console.trace(label || 'StackTrace');
    }
  }

  /**
   * Starts a timer with a label.
   */
  time(label: string) {
    if (isDevMode()) {
      console.time(label);
    }
  }

  /**
   * Ends a timer with a label and logs the elapsed time.
   */
  timeEnd(label: string) {
    if (isDevMode()) {
      console.timeEnd(label);
    }
  }

  /**
   * Logs emissions from an Observable with a label.
   */
  observable<T>(obs$: Observable<T>, name: string) {
    if (isDevMode()) {
      obs$.subscribe({
        next: (value) => console.log(`[Observable:${name}] next:`, value),
        error: (err) => console.error(`[Observable:${name}] error:`, err),
        complete: () => console.log(`[Observable:${name}] complete`),
      });
    }
    // In production, you might want to skip or send to remote logger
  }
  /**
   * Counts the number of times this count() has been called with the given label.
   */
  count(label: string) {
    if (isDevMode()) {
      console.count(label);
    }
  }

  /**
   * Resets the count for the given label.
   */
  countReset(label: string) {
    if (isDevMode()) {
      console.countReset(label);
    }
  }

  /**
   * Logs a warning if the value is deprecated.
   */
  deprecated(message: string, data?: any) {
    if (isDevMode()) {
      console.warn('[DEPRECATED]', message, data);
    }
  }

  /**
   * Clears the console (dev mode only).
   */
  clear() {
    if (isDevMode()) {
      console.clear();
    }
  }
  group(groupTitle: string) {
    if (isDevMode()) {
      console.group(groupTitle);
    }
  }

  groupEnd() {
    if (isDevMode()) {
      console.groupEnd();
    }
  }
}
/*

constructor(private logger: LoggerService) {}

// Info, Debug, Error, Warn
this.logger.info('User loaded', { userId: 1 });
this.logger.debug('Debugging value', { value: 42 });
this.logger.error('An error occurred', new Error('Test error'));
this.logger.warn('This is a warning', { deprecated: true });

// Assert
this.logger.assert(user.isActive, 'User should be active');

// Group/GroupEnd
this.logger.group('User Actions');
this.logger.info('User clicked button');
this.logger.groupEnd();

// Observable logging
this.logger.observable(this.myObservable$, 'MyObservable');

// Count/CountReset
this.logger.count('API Calls');
this.logger.countReset('API Calls');

// Deprecated
this.logger.deprecated('This method will be removed soon', { method: 'oldMethod' });

// Table
this.logger.table([{ name: 'Alice' }, { name: 'Bob' }]);

// Trace
this.logger.trace('Trace for debugging');

// Clear
this.logger.clear();

*/
// Usage example in a component or service:
// constructor(private logger: LoggerService) {}
// this.logger.log('This is a log message');
// this.logger.info('This is an info message');
// this.logger.warn('This is a warning message');
// this.logger.error('This is an error message');
// this.logger.debug('This is a debug message');
// this.logger.trace('This is a trace message');
// this.logger.table([{ name: 'Alice' }, { name: 'Bob' }]);
// this.logger.assert(true, 'This is an assertion message');
// this.logger.time('MyTimer');
// this.logger.timeEnd('MyTimer');
// this.logger.observable(this.myObservable$, 'MyObservable');
// this.logger.count('API Calls');
// this.logger.countReset('API Calls');
// this.logger.deprecated('This method is deprecated');
// this.logger.clear();
// this.logger.group('My Group');
// this.logger.groupEnd();
// This service provides a consistent logging interface for Angular applications.
// It can be extended to include remote logging, error tracking, etc.


