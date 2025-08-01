import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public throwTestError(i:any): void {
    throw new Error('Rollbar Rollbar Rollbar : ' +i);
    }
    // give me 10 error
  public throwTestErrors(): void {
    for (let i = 0; i < 10; i++) {
      this.throwTestError(i);
    }
  }
}
