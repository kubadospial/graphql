import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxThreeModule } from 'ngx-three';
import { COMPONENTS, CanvasComponent } from './componens';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, NgxThreeModule],
  exports: [CanvasComponent],
})
export class AnimationModule {}
