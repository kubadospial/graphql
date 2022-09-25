import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SLIDE_UP } from '../animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MissionsListState } from './missions-list.state';

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
  providers: [MissionsListState],
})
export class MissionsListComponent {
  missions$ = this._state.missions$;
  isMoving$ = this._state.isMoving$;
  isLoading$ = this._state.isLoading$;

  constructor(private _state: MissionsListState, private _router: Router) {}

  goToDetails(id: string) {
    this._state.clearList();
    setTimeout(() => {
      this._router.navigate([id]);
    }, 500);
  }
}
