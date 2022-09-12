import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { PerspectivePositionState } from './animation/states';

@Injectable({ providedIn: 'root' })
export class AppService {
  private _isLoading$ = new BehaviorSubject<boolean>(true);
  isLoading$ = this._isLoading$.asObservable();
  isMoving$ = this._perspective.isMoving$.pipe(distinctUntilChanged());

  constructor(private _perspective: PerspectivePositionState) {}

  startLoading() {
    this._isLoading$.next(true);
  }

  stopLoading() {
    this._isLoading$.next(false);
  }
}
