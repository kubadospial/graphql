import { Injectable } from '@angular/core';
import { TextureLoaderService } from 'ngx-three';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { Texture } from 'three';

@Injectable({ providedIn: 'root' })
export class TextureState {
  private _texturesRegistry: string[] = [];
  private _loadedTextures: string[] = [];
  private _areAllLoadedSub = new BehaviorSubject<boolean>(false);
  private _percentageLoadedSub = new BehaviorSubject<number>(0);

  areAllLoaded$ = this._areAllLoadedSub
    .asObservable()
    .pipe(distinctUntilChanged());
  percentageLoaded$ = this._percentageLoadedSub.asObservable().pipe(
    distinctUntilChanged(),
    map((val) => Math.round(val * 100))
  );

  constructor(private _textureService: TextureLoaderService) {}

  getTexture(url: string): Texture {
    this._texturesRegistry.push(url);

    return this._textureService.load(url, () => {
      this._loadedTextures.push(url);
      this._areAllLoadedSub.next(this._areEqual);
      this._percentageLoadedSub.next(this._divideLoaded);
    });
  }

  private get _areEqual(): boolean {
    return this._texturesRegistry.length === this._loadedTextures.length;
  }

  private get _divideLoaded(): number {
    return this._loadedTextures.length / this._texturesRegistry.length;
  }
}
