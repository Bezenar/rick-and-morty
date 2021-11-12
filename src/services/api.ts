import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFetchedCharactersResultItem, IFetchedData, IFetchedEpisodesResultItem } from '../interfaces/global';
import { ICharactersStateItem, SerializiedCharactersResponse } from '../interfaces/store';

export const rickAndMorty = createApi({
  reducerPath: 'rickAndMorty',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharactersPage: builder.query<SerializiedCharactersResponse, string>({
      query: (path) => `character/?page=${path}`,
      transformResponse: (response: IFetchedData) => ({
        pages: response.info.pages,
        characters: response.results.reduce(
          (acc: Array<ICharactersStateItem>, c: IFetchedCharactersResultItem) => {
            const character: any = Object.assign({}, c);
            delete character.type;
            delete character.url;
            delete character.status;
            delete character.created;
            delete character.species;
            character as ICharactersStateItem
            acc.push(character);
            return acc;
        }, []),
      })
    }),
    getEpisodesName: builder.query<Array<string> | string, string>({
      query: (path) => `episode/${path}`,
      transformResponse: (response: Array<IFetchedEpisodesResultItem> | IFetchedEpisodesResultItem) => 
        Array.isArray(response)
          ? response.map((e: IFetchedEpisodesResultItem) => e.name)
          : response.name
    }),
  })
})

export const { useGetCharactersPageQuery, useGetEpisodesNameQuery } = rickAndMorty;