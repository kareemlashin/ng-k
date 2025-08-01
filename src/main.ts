import * as Sentry from "@sentry/angular";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

Sentry.init({
  dsn: "https://8c8f28ec8c424101b1ee345baf55544c@o4505526934044672.ingest.us.sentry.io/4505595230027776",
  sendDefaultPii: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));