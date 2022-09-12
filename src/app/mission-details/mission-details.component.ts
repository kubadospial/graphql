import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { shareReplay, tap, BehaviorSubject } from 'rxjs';
import { SLIDE_UP } from '../common/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../app.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpaceXService } from '../spacex/spacex.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
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
export class MissionDetailsComponent {
  private _isLoadingSub = new BehaviorSubject<boolean>(true);

  details$ = this._spaceX
    .getMissionDetails(this._route.snapshot.params['name'])
    .pipe(
      tap(() => this._isLoadingSub.next(false)),
      shareReplay(1)
    );
  isMoving$ = this._appService.isMoving$;
  isLoading$ = this._isLoadingSub.asObservable();

  constructor(
    private _route: ActivatedRoute,
    private _appService: AppService,
    private _spaceX: SpaceXService
  ) {}
}
