import React, { useEffect } from 'react';
import { ICharactersStateItem } from '../interfaces/store';
import CharacterCard from './CharacterCard';

const CharactersList: React.FC<{characters: Array<ICharactersStateItem> | undefined}> = (props) => {
  useEffect(() => {})

  return (
    <div className='flex flex-wrap jc-center'>
      {
        props.characters?.map((c: ICharactersStateItem) => 
          <CharacterCard key={`char-${c.id}`} character={c} />
        )
      }
    </div>
  )
}

export default CharactersList;