import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SMOOTH_ENTER } from '../common/animations';
import { SpaceXService } from '../spacex/spacex.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  animations: [SMOOTH_ENTER],
})
export class MissionsListComponent {
  missions$ = this._spaceX.getMissionsList();

  constructor(private _spaceX: SpaceXService) {}
}
