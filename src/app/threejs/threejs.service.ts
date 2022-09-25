import { Injectable } from '@angular/core';
import { PerspectivePositionState, TextureState } from './states';

@Injectable({ providedIn: 'root' })
export class ThreeJsService {
  isMoving$ = this._perspective.isMoving$;
  areTexturesLoaded$ = this._textures.areAllLoaded$;
  percentageLoaded$ = this._textures.percentageLoaded$;

  constructor(
    private _perspective: PerspectivePositionState,
    private _textures: TextureState
  ) {}
}
