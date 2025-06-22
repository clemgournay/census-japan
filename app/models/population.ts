export type PopulationNode = {
  year: number;
  value: number;
  rate: number;
}

export type PopulationCategory = {
  label: string;
  data: Array<PopulationNode>;
}

export type PopulationComposition = {
  boundaryYear: number;
  data: Array<PopulationCategory>;
}