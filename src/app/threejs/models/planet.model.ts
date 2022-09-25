export interface PlanetModel {
  position: [x: number, y: number, z: number];
  url: string;
  bumpMapUrl: string | undefined;
  bumpScale: number | undefined;
  cloudsUrl: string | undefined;
}
