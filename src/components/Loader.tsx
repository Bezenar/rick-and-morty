import React from 'react';
import { ILoaderProps } from '../interfaces/props';

const Loader: React.FC<ILoaderProps> = (props) => {
  return (
    <div
      style={{ width: `${props.width}`, height: `${props.height}` }}
      className="flex jc--center m--center"
    >
      <div className="loader">
        <div className="loader__inner bg--dark"></div>
      </div>
    </div>
  )
}

export default Loader;