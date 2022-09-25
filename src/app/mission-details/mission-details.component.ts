import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SLIDE_UP } from '../animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MissionDetailsState } from './mission-details.state';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule],
  animations: [SLIDE_UP],
  providers: [MissionDetailsState],
})
export class MissionDetailsComponent {
  details$ = this._state.getDetails(this._route.snapshot.params['name']);
  isMoving$ = this._state.isLoading$;
  isLoading$ = this._state.isLoading$;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _state: MissionDetailsState
  ) {}

  goBack() {
    this._state.clearDetails();
    setTimeout(() => {
      this._router.navigate(['../']);
    }, 500);
  }
}
