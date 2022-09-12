import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SLIDE_UP } from '../common/animations';
import { SpaceXService } from '../spacex/spacex.service';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../app.service';
import { BehaviorSubject, tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  animations: [SLIDE_UP],
})
export class MissionsListComponent {
  private _isLoadingSub = new BehaviorSubject<boolean>(true);

  missions$ = this._spaceX
    .getMissionsList()
    .pipe(tap(() => this._isLoadingSub.next(false)));
  isMoving$ = this._appService.isMoving$;
  isLoading$ = this._isLoadingSub.asObservable();

  constructor(
    private _spaceX: SpaceXService,
    private _appService: AppService
  ) {}
}
