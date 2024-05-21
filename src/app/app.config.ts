import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
    ])
  ]
};
