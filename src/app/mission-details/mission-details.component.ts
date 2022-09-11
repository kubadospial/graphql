import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { SMOOTH_ENTER } from '../common/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule],
  animations: [SMOOTH_ENTER],
})
export class MissionDetailsComponent {
  details$ = this._route.data.pipe(
    map((data) => data['name']),
    tap((e) => console.log(e))
  );

  constructor(private _route: ActivatedRoute) {}
}
