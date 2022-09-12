import { Type } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { StarComponent } from './star/star.component';
import { PlanetComponent } from './planet/planet.component';

export const COMPONENTS: Type<unknown>[] = [
  CanvasComponent,
  StarComponent,
  PlanetComponent,
];

export * from './canvas/canvas.component';
export * from './star/star.component';
export * from './planet/planet.component';
