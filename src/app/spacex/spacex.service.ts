import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { filter, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpaceXService {
  ships$ = this._apollo
    .watchQuery({
      query: gql`
        query Ships {
          ships {
            name
            type
          }
        }
      `,
    })
    .valueChanges.pipe(
      filter(Boolean),
      map((response: any) => response.data['ships'])
    );

  constructor(private _apollo: Apollo) {}

  getShipDetails(name: string) {
    return this._apollo
      .query({
        query: gql`
          query Ships($find: ShipsFind) {
            ships(find: $find) {
              model
              name
              type
              status
              year_built
              weight_kg
              url
              successful_landings
              speed_kn
              roles
              position {
                latitude
                longitude
              }
              missions {
                flight
                name
              }
              imo
              image
              home_port
              course_deg
              class
              attempted_landings
              active
              abs
              id
              mmsi
            }
          }
        `,
        variables: {
          find: {
            name,
          },
        },
      })
      .pipe(map((response: any) => response.data.ships[0]));
  }
}
