interface IFethcedInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IFetchedData {
  info: IFethcedInfo;
  results: Array<IFetchedCharactersResultItem>;
}

export interface IFetchedResultItemMain {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface IFetchedCharactersResultItem extends IFetchedResultItemMain {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
}

export interface IFetchedLocationsResultItem extends IFetchedResultItemMain {
  type: string;
  dimension: string;
  residents: Array<string>;
}

export interface IFetchedEpisodesResultItem extends IFetchedResultItemMain {
  air_date: string;
  episode: string;
  characters: Array<string>;
}