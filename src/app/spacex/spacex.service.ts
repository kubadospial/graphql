import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { filter, map } from 'rxjs';
import { DETAILS_QUERY, LIST_QUERY } from './graphs';
import { SpaceXDetails, SpaceXList } from './models';

@Injectable({ providedIn: 'root' })
export class SpaceXService {
  constructor(private _apollo: Apollo) {}

  getMissionsList() {
    return this._apollo
      .query<SpaceXList>({
        query: LIST_QUERY,
      })
      .pipe(
        filter(Boolean),
        map((response) => response.data.missions)
      );
  }

  getMissionDetails(name: string) {
    return this._apollo
      .query<SpaceXDetails>({
        query: DETAILS_QUERY,
        variables: {
          missionId: name,
        },
      })
      .pipe(map((response) => response.data.mission));
  }
}
