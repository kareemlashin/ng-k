import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from "@sentry/angular";

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TrackJS } from 'trackjs';
TrackJS.install({
  token: "84cf8df2f8e7458899f3e490524f93de",
  application: "ng-k"
});
Sentry.init({
  dsn: "https://d9720bdb26f89a6055051e6df2d19ba0@o4505526934044672.ingest.us.sentry.io/4509768759181312",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));