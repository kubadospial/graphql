import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Texture, MathUtils } from 'three';
import { interval, map, Observable } from 'rxjs';
import {
  shareReplay,
  filter,
  switchMap,
  startWith,
  takeWhile,
} from 'rxjs/operators';
import { TextureLoaderService } from 'ngx-three';
import { Event, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

type POS = [x: number, y: number, z: number];

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent {
  private _missionId$ = this._router.events.pipe(
    filter((event: Event) => event instanceof NavigationEnd),
    map((event) => !!(event as NavigationEnd).url.replace('/', ''))
  );
  private _initialPosition: POS = !!this._document.location.pathname.replace(
    '/',
    ''
  )
    ? [510, 510, 510]
    : [15, 10, 10];

  position$ = this._missionId$.pipe(
    switchMap((is: boolean) =>
      is ? this.incrementPosition() : this.decrementPosition()
    ),
    startWith(this._initialPosition),
    shareReplay(1)
  );

  background: Texture;
  earth: Texture;
  mars: Texture;

  stars: [x: number, y: number, z: number][] = new Array(200)
    .fill('')
    .map(() => {
      return [0, 0, 0].map(() => MathUtils.randFloatSpread(2000)) as [
        x: number,
        y: number,
        z: number
      ];
    });

  get screenRatio() {
    return window.innerWidth / window.innerHeight;
  }

  rotate$: Observable<[x: number, y: number, z: number]> = interval(10).pipe(
    map((e) => [e * 0.0001, 0, 0] as [x: number, y: number, z: number]),
    shareReplay(1)
  );

  constructor(
    private _textureService: TextureLoaderService,
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.background = this._textureService.load('../assets/images/bg.jpg');
    this.earth = this._textureService.load('../assets/images/earth.jpg');
    this.mars = this._textureService.load('../assets/images/mars.jpg');
  }

  incrementPosition() {
    return interval(10).pipe(
      map(() => this._initialPosition),
      map(([x, y, z]) => {
        this._initialPosition = [
          x + 5,
          y < 510 ? y + (y > 500 ? 0 : 20) : 510,
          z < 510 ? z + (z > 500 ? 0 : 20) : 510,
        ];

        return this._initialPosition;
      }),
      takeWhile(([x]) => x <= 510)
    );
  }

  decrementPosition() {
    return interval(10).pipe(
      map(() => this._initialPosition),
      map(([x, y, z]) => {
        this._initialPosition = [x - 10, y - 10, z - 10];
        console.log(this._initialPosition);
        return this._initialPosition;
      }),
      takeWhile(([x]) => x >= 15)
    );
  }
}
