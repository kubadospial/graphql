import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MathUtils } from 'three';
import { interval, map, Observable, fromEvent } from 'rxjs';
import { shareReplay, debounceTime, startWith } from 'rxjs/operators';
import { PerspectivePositionState, TextureState } from '../../states';
import { PlanetModel } from '../../models';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent {
  private get _screenRatio() {
    return window.innerWidth / window.innerHeight;
  }

  earth: PlanetModel = {
    position: [0, 0, 12],
    url: '../assets/images/earth.jpg',
    bumpMapUrl: '../assets/images/earth-bump-map.jpg',
    bumpScale: 0.2,
    cloudsUrl: '../assets/images/earth-cloud.png',
  };

  mars: PlanetModel = {
    position: [490, 500, 500],
    url: '../assets/images/mars.jpg',
    bumpMapUrl: '../assets/images/mars-bump-map.jpg',
    bumpScale: 0.7,
    cloudsUrl: undefined,
  };

  background = this._textureState.getTexture('../assets/images/bg.jpg');
  stars: [x: number, y: number, z: number][] = new Array(200)
    .fill('')
    .map(
      () =>
        [0, 0, 0].map(() => MathUtils.randFloatSpread(2000)) as [
          x: number,
          y: number,
          z: number
        ]
    );

  rotate$: Observable<[x: number, y: number, z: number]> = interval(10).pipe(
    map((e) => [0, e * 0.0002, 0] as [x: number, y: number, z: number]),
    shareReplay(1)
  );

  position$ = this._persectivePosition.position$.pipe(shareReplay(1));
  screenRatio$ = fromEvent(window, 'resize').pipe(
    debounceTime(100),
    map(() => this._screenRatio),
    startWith(this._screenRatio)
  );

  constructor(
    private _textureState: TextureState,
    private _persectivePosition: PerspectivePositionState
  ) {}
}
