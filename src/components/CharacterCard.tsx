import React, { useState } from 'react';
// import { useAppDispatch } from '../config/hooks';
import { ICharactersStateItem } from '../interfaces/store';
import CharacterCardEpisodeList from './CharacterCardEpisodeList';
import CharacterProp from './CharacterProp';

const CharacterCard: React.FC<{ character: ICharactersStateItem }> = ({ character }) => {
  const [showEpisodesList, setShowEpisodesList] = useState(false);

  const showList = () => {
    setShowEpisodesList(true);
  }

  const closeList = () => {
    setShowEpisodesList(false);
  }

  return (
    <div style={{ height: '12rem' }} className='flex wid--50 p--a-1'>
      <div style={{overflow: 'hidden'}} className="bg--white rounded--m flex wid--100">
        <div className="wid--30">
          <img style={{ width: '100%', height: '100%', objectFit: 'cover'}} src={character.image} alt={character.name} title={character.name} />
        </div>
        {showEpisodesList ? (
          <CharacterCardEpisodeList closeList={closeList} path={character.episode.map((url: string) => url.split('/').pop()).join(',')} />
        ): (
          <CharacterProp character={character} showList={showList} />
        )}
      </div>
    </div>
  )
}

export default CharacterCard;