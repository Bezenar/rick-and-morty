import { IFetchedCharactersResultItem, IFetchedLocationsResultItem, IFetchedEpisodesResultItem } from './global';

export interface SerializiedCharactersResponse {
  pages: number;
  characters: Array<ICharactersStateItem>
}

export interface ICharactersStateItem extends Omit<
  IFetchedCharactersResultItem,
  'status' | 'type' | 'url' | 'created' | 'species'
> { }

export interface ILocationsStateItem extends Omit<
  IFetchedLocationsResultItem,
  'url' | 'created'
> { }

export interface IEpisodeStateItem extends Omit<
  IFetchedEpisodesResultItem,
  'url' | 'created'
> { }