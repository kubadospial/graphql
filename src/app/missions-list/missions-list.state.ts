import { Injectable } from '@angular/core';
import { BehaviorSubject, iif, of, switchMap, tap } from 'rxjs';
import { AppService } from '../app.service';
import { SpaceXService } from '../spacex';

@Injectable()
export class MissionsListState {
  private _clearList = new BehaviorSubject<boolean>(false);

  missions$ = this._clearList.asObservable().pipe(
    tap(() => this._appService.startLoading()),
    switchMap((clear) =>
      iif(() => clear, of(undefined), this._spaceX.getMissionsList())
    ),
    tap(() => this._appService.stopLoading())
  );

  isMoving$ = this._appService.isMoving$;
  isLoading$ = this._appService.isLoading$;

  constructor(
    private _spaceX: SpaceXService,
    private _appService: AppService
  ) {}

  clearList() {
    this._clearList.next(true);
  }
}
