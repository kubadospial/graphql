import { Injectable } from '@angular/core';
import { BehaviorSubject, iif, of, switchMap, tap } from 'rxjs';
import { AppService } from '../app.service';
import { SpaceXService } from '../spacex';

@Injectable()
export class MissionDetailsState {
  private _clearDetails = new BehaviorSubject<boolean>(false);

  isMoving$ = this._appService.isMoving$;
  isLoading$ = this._appService.isLoading$;

  constructor(
    private _appService: AppService,
    private _spaceX: SpaceXService
  ) {}

  getDetails(name: string) {
    return this._clearDetails.asObservable().pipe(
      tap(() => this._appService.startLoading()),
      switchMap((clear) =>
        iif(() => clear, of(undefined), this._spaceX.getMissionDetails(name))
      ),
      tap(() => this._appService.stopLoading())
    );
  }

  clearDetails() {
    this._clearDetails.next(true);
  }
}
