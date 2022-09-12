import { Injectable } from '@angular/core';
import { TextureLoaderService } from 'ngx-three';

@Injectable({ providedIn: 'root' })
export class TextureState {
  constructor(private _textureService: TextureLoaderService) {}

  getTexture(url: string) {
    return this._textureService.load(url);
  }
}
