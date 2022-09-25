import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxThreeModule } from 'ngx-three';
import { CanvasComponent, THREE_CONTAINERS } from './containers';
import { THREE_COMPONENTS } from './componens';

@NgModule({
  declarations: [...THREE_CONTAINERS, ...THREE_COMPONENTS],
  imports: [CommonModule, NgxThreeModule],
  exports: [CanvasComponent],
})
export class ThreeJsModule {}
