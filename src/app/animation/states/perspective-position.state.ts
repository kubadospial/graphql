import { Injectable, Inject } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { interval, map, Observable } from 'rxjs';
import {
  shareReplay,
  filter,
  switchMap,
  startWith,
  takeWhile,
} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

type POS = [x: number, y: number, z: number];

@Injectable({ providedIn: 'root' })
export class PerspectivePositionState {
  private _hasMissionId$ = !!this._document.location.pathname.replace('/', '');
  private _position: POS = this._hasMissionId$ ? [510, 510, 510] : [15, 10, 10];
  private _missionId$ = this._router.events.pipe(
    filter((event: Event) => event instanceof NavigationEnd),
    map((event) => !!(event as NavigationEnd).url.replace('/', ''))
  );

  position$ = this._missionId$.pipe(
    switchMap((is: boolean) =>
      is ? this._incrementPosition() : this._decrementPosition()
    ),
    startWith(this._position)
  );

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  private _incrementPosition() {
    return interval(10).pipe(
      map(() => this._position),
      map(([x, y, z]) => {
        this._position = [
          x + 5,
          y < 510 ? y + (y > 500 ? 0 : 20) : 510,
          z < 510 ? z + (z > 500 ? 0 : 20) : 510,
        ];

        return this._position;
      }),
      takeWhile(([x]) => x <= 510)
    );
  }

  private _decrementPosition() {
    return interval(10).pipe(
      map(() => this._position),
      map(([x, y, z]) => {
        this._position = [x - 10, y - 10, z - 10];
        return this._position;
      }),
      takeWhile(([x]) => x >= 15)
    );
  }
}
