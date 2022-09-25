import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { ThreeJsService } from './threejs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private _isLoading$ = new BehaviorSubject<boolean>(true);
  isLoading$ = this._isLoading$.asObservable();

  isMoving$ = this._threeJs.isMoving$.pipe(distinctUntilChanged());
  areTexturesLoaded$ = this._threeJs.areTexturesLoaded$;
  percentageLoaded$ = this._threeJs.percentageLoaded$;

  constructor(private _threeJs: ThreeJsService) {}

  startLoading() {
    this._isLoading$.next(true);
  }

  stopLoading() {
    this._isLoading$.next(false);
  }
}
