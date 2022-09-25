import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarComponent {
  @Input() position: [x: number, y: number, z: number] = [0, 0, 0];
}
