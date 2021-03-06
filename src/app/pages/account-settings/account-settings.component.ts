import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public settingsService: SettingsService) { }

  ngOnInit() {
    this.aplicarCheck();
  }

  cambiaColor(tema: string, link: any) {
    this.settingsService.aplicarTema(tema);
    this.aplicarCheck();

  }

  aplicarCheck() {

    const selectores: any = document.getElementsByClassName('selector');

    const tema = this.settingsService.ajustes.tema;

    for (const ref of selectores) {
      ref.classList.remove('working');
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
      }
    }

  }


}
