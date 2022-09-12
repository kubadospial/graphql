import { Injectable, Inject } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { interval, map, BehaviorSubject } from 'rxjs';
import {
  filter,
  switchMap,
  startWith,
  takeWhile,
  skip,
  distinctUntilChanged,
} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

type POS = [x: number, y: number, z: number];

const POSITION_MARS = 510;
const POSITION_EARTH = 10;

@Injectable({ providedIn: 'root' })
export class PerspectivePositionState {
  private _isMovingSub = new BehaviorSubject<boolean>(false);
  private _hasMissionId = !!this._document.location.pathname.replace('/', '');
  private _position: POS = this._hasMissionId
    ? [POSITION_MARS, POSITION_MARS, POSITION_MARS]
    : [POSITION_EARTH, POSITION_EARTH, POSITION_EARTH];
  private _missionId$ = this._router.events.pipe(
    filter((event: Event) => event instanceof NavigationEnd),
    skip(1),
    map((event) => !!(event as NavigationEnd).url.replace('/', ''))
  );

  position$ = this._missionId$.pipe(
    switchMap((is: boolean) =>
      is ? this._incrementPosition() : this._decrementPosition()
    ),
    startWith(this._position)
  );
  isMoving$ = this._isMovingSub.asObservable().pipe(distinctUntilChanged());

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  private _incrementPosition() {
    this._isMovingSub.next(true);
    return interval(10).pipe(
      map(() => this._position),
      takeWhile(([x]) => x <= POSITION_MARS - 5),
      map(([x, y, z]) => {
        this._position = [
          x + 5,
          this._incrementAxis(y),
          this._incrementAxis(z),
        ];
        if (x >= POSITION_MARS - 5) {
          this._isMovingSub.next(false);
        }
        return this._position;
      })
    );
  }

  private _decrementPosition() {
    this._isMovingSub.next(true);
    return interval(10).pipe(
      map(() => this._position),
      takeWhile(([x]) => x > POSITION_EARTH),
      map(([x, y, z]) => {
        this._position = [
          this._decrementAxis(z),
          this._decrementAxis(y),
          this._decrementAxis(z),
        ];
        if (x === POSITION_EARTH + 5) {
          this._isMovingSub.next(false);
        }
        return this._position;
      })
    );
  }

  private _incrementAxis(axis: number): number {
    return axis < POSITION_MARS
      ? axis + (axis <= POSITION_MARS - 10 ? 20 : 0)
      : POSITION_MARS;
  }

  private _decrementAxis(axis: number): number {
    return axis >= POSITION_EARTH ? axis - 5 : POSITION_EARTH;
  }
}
