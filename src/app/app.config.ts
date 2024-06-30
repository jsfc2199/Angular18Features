import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      //con solo añadir esto ya hay transiciones entre rutas, no está para todos los navegadores
      withViewTransitions({
        skipInitialTransition: true, //nos saltamos la transición inicial
        onViewTransitionCreated(transitionInfo) {
          console.log(transitionInfo); //podemos ver información de la transición
        },
      })
    ),
  ],
};
