import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Texture, MathUtils } from 'three';
import { interval, map, Observable } from 'rxjs';
import { TextureLoaderService } from 'ngx-three';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent {
  // three
  readonly glbPath = `https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/assets/DamagedHelmet.glb`;
  background: Texture;
  earth: Texture;
  rotateEarth$: Observable<[x: number, y: number, z: number]> = interval(
    10
  ).pipe(map((e) => [e * 0.0001, 0, 0]));

  stars: [x: number, y: number, z: number][] = new Array(200)
    .fill('')
    .map(() => {
      return [0, 0, 0].map(() => MathUtils.randFloatSpread(100)) as [
        x: number,
        y: number,
        z: number
      ];
    });

  get screenRatio() {
    return window.innerWidth / window.innerHeight;
  }

  constructor(
    private _textureService: TextureLoaderService,
    private _cd: ChangeDetectorRef
  ) {
    this.background = this._textureService.load('../assets/images/bg.jpg');
    this.earth = this._textureService.load('../assets/images/earth2.jpg');
  }
}
