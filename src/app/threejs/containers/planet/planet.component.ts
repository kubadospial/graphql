import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Texture } from 'three';
import { TextureState } from '../../states';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetComponent {
  @Input() position!: [x: number, y: number, z: number];
  @Input() rotation!: [x: number, y: number, z: number];
  @Input() bumpScale: number | undefined;
  @Input() set url(url: string | undefined) {
    if (url) {
      this.planet = this._textureState.getTexture(url);
    }
  }
  @Input() set bumpMapUrl(url: string | undefined) {
    if (url) {
      this.bumpMap = this._textureState.getTexture(url);
    }
  }
  @Input() set cloundsUrl(url: string | undefined) {
    if (url) {
      this.clouds = this._textureState.getTexture(url);
    }
  }
  planet: Texture | undefined;
  bumpMap: Texture | null = null;
  clouds: Texture | undefined;

  constructor(private _textureState: TextureState) {}
}
