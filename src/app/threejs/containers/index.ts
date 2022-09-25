import { Type } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { PlanetComponent } from './planet/planet.component';

export const THREE_CONTAINERS: Type<unknown>[] = [
  PlanetComponent,
  CanvasComponent,
];

export * from './canvas/canvas.component';
export * from './planet/planet.component';
