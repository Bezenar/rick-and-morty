import React from "react";
import { ICharactersStateItem } from "../interfaces/store";

const CharacterProp: React.FC<{character: ICharactersStateItem, showList: any}> = ({character, showList}) => {
  return (
    <div style={{overflow: 'scroll'}} className="wid--70 p--a-4 flex dir--col">
      <p className='p--b-1'>
        <span style={{ fontWeight: 900 }}>Name: </span>
        <span>{ character.name }</span>
      </p>
      <p className='p--b-1'>
        <span style={{ fontWeight: 900 }}>Gender: </span>
        <span>{ character.gender }</span>
      </p>
      <p className='p--b-1'>
        <span style={{ fontWeight: 900 }}>Origin: </span>
        <span>{ character.origin.name }</span>
      </p>
      <p className='p--b-1'>
        <span style={{ fontWeight: 900 }}>Location: </span>
        <span>{ character.location.name }</span>
      </p>
      <p className='p--b-1'>
        <span style={{ fontWeight: 900 }}>Episode count: </span>
        <span className='link' onClick={() => showList()}>{ character.episode.length }</span>
      </p>    
    </div>
  )
}

export default CharacterProp;