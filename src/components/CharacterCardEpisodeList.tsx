import React from 'react';
import { useGetEpisodesNameQuery } from '../services/api';
import Loader from './Loader';

const CharacterCardEpisodeList: React.FC<{ path: string, closeList:any }> = ({path, closeList}) => {
  const { data, isLoading } = useGetEpisodesNameQuery(path)
  
  return (
    <div
      style={{overflow: 'scroll'}}
      className={(isLoading ? 'ai--center h--full ' : 'dir--col ') + 'wid--70 p--a-4 flex'}
    >
      {
        isLoading ? (
          <Loader width={'60%'} height={'10px'} />
        ) : (
          <div>
            <button
              className="btn btn--danger p--1-2 rounded--l"
              style={{
                position: 'sticky',
                left: '100%',
                top: 0,
              }}
              onClick={closeList}
            >
              close
            </button>
            <ul style={{ listStyle: 'number' }} className='p--0-4'>
              {
                Array.isArray(data)
                  ? data?.map((name: string) => (<li key={`episode: ${name}`}>{name}</li>))
                  : (<li>{ data }</li>)
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default CharacterCardEpisodeList;