import { gql } from 'apollo-angular';

export const LIST_QUERY = gql`
  query Missions {
    missions {
      name
      id
    }
  }
`;

export const DETAILS_QUERY = gql`
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
`;
