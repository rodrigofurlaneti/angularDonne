import { VERSION as CDK_VERSION } from '@angular/cdk';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

platformBrowserDynamic()
  .bootstrapModule(AppModule)

  const changeBackgroundByTimeOfDay = () => {
    const now = new Date();
    const timezoneOffset = -3; //HORARIO DO BRASIL -3
    const currentHour = (now.getUTCHours() + timezoneOffset + 24) % 24;
    console.log('Horário local atual do dispositivo:', currentHour);
    const body = document.body;
    if (currentHour >= 5 && currentHour < 18) {
      body.style.backgroundImage = 'url("assets/daybackground.jpg")';
    }
    else {
      body.style.backgroundImage = 'url("assets/nightbackground.jpg")';
      console.log('Alterando o background para a noite...' + currentHour);
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundByTimeOfDay();
  });

  const overlayContainer = document.querySelector('.cdk-overlay-container');

  