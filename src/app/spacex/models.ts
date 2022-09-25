interface ListElement {
  name: string;
  id: string;
}
export interface SpaceXList {
  missions: ListElement[];
}

interface OrbitParams {
  apoapsis_km: number;
  arg_of_pericenter: number;
  eccentricity: number;
  epoch: string;
  inclination_deg: number;
  lifespan_years: number | null;
  longitude: number | null;
  mean_anomaly: number;
  mean_motion: number;
  periapsis_km: number;
  period_min: number;
  raan: number;
  reference_system: string;
  regime: string;
  semi_major_axis_km: number;
}
interface Payload {
  customers: string[];
  id: string;
  manufacturer: string;
  nationality: string;
  norad_id: number[];
  orbit: string;
  orbit_params: OrbitParams;
  payload_mass_kg: string | null;
  payload_type: string;
  reused: boolean;
}

export interface SpaceXDetails {
  mission: {
    description: string;
    id: string;
    manufacturers: string[];
    name: string;
    payloads: Array<Payload | null>;
    twitter: string;
    website: string;
    wikipedia: string;
  };
}
