import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Texture } from 'three';
import { TextureState } from '../../states/texture.state';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetComponent {
  @Input() position!: [x: number, y: number, z: number];
  @Input() rotation!: [x: number, y: number, z: number];
  @Input() set url(url: string | undefined) {
    if (url) {
      this.planet = this._textureState.getTexture(url);
    }
  }
  planet: Texture | undefined;

  constructor(private _textureState: TextureState) {}
}
