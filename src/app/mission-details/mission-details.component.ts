import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { shareReplay, tap, BehaviorSubject, switchMap } from 'rxjs';
import { SLIDE_UP } from '../common/animations';
import { AppService } from '../app.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpaceXService } from '../spacex/spacex.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule],
  animations: [SLIDE_UP],
})
export class MissionDetailsComponent {
  private _isLoadingSub = new BehaviorSubject<boolean>(true);
  private _detailsSub = new BehaviorSubject<string | undefined>(
    this._route.snapshot.params['name']
  );

  details$ = this._detailsSub.asObservable().pipe(
    switchMap((name) => this._spaceX.getMissionDetails(name)),
    tap(() => this._isLoadingSub.next(false)),
    shareReplay(1)
  );
  isMoving$ = this._appService.isMoving$;
  isLoading$ = this._isLoadingSub.asObservable();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _appService: AppService,
    private _spaceX: SpaceXService
  ) {}

  goBack() {
    this._detailsSub.next(undefined);
    setTimeout(() => {
      this._router.navigate(['../']);
    }, 400);
  }
}
