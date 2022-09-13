import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { filter, map, of } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({ providedIn: 'root' })
export class SpaceXService {
  constructor(private _apollo: Apollo, private _appService: AppService) {}

  getMissionsList(clearRequest: boolean) {
    if (!clearRequest) {
      this._appService.startLoading();
    }

    return clearRequest
      ? of(undefined)
      : this._apollo
          .watchQuery({
            query: gql`
              query Missions {
                missions {
                  name
                  id
                }
              }
            `,
          })
          .valueChanges.pipe(
            filter(Boolean),
            map((response: any) => {
              this._appService.stopLoading();
              return response.data['missions'];
            })
          );
  }

  getMissionDetails(name: string | undefined) {
    if (name != null) {
      this._appService.startLoading();
    }
    return name == null
      ? of(undefined)
      : this._apollo
          .query({
            query: gql`
              query Mission($missionId: ID!) {
                mission(id: $missionId) {
                  description
                  id
                  manufacturers
                  name
                  payloads {
                    customers
                    id
                    manufacturer
                    nationality
                    norad_id
                    orbit
                    orbit_params {
                      apoapsis_km
                      arg_of_pericenter
                      eccentricity
                      epoch
                      inclination_deg
                      lifespan_years
                      longitude
                      mean_anomaly
                      mean_motion
                      periapsis_km
                      period_min
                      raan
                      reference_system
                      regime
                      semi_major_axis_km
                    }
                    payload_mass_kg
                    payload_type
                    reused
                  }
                  twitter
                  website
                  wikipedia
                }
              }
            `,
            variables: {
              missionId: name,
            },
          })
          .pipe(
            map((response: any) => {
              this._appService.stopLoading();
              return response.data.mission;
            })
          );
  }
}
