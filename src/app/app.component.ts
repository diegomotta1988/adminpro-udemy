import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminpro';

  // Sólo con inyectarlo va a disparar el constructor de SettingsService
  constructor(public settingsService: SettingsService) {

  }
}
