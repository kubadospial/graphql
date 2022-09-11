import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceXService } from './spacex.service';

@Injectable({ providedIn: 'root' })
export class DetailsResolver implements Resolve<any> {
  constructor(private _spaceX: SpaceXService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this._spaceX.getMissionDetails(route.params['name']);
  }
}
