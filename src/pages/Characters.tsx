import React, { ChangeEvent, useEffect, useState } from 'react';

import { useGetCharactersPageQuery } from '../services/api';
import { setPages } from '../services/paginationSlicer';

import { useAppDispatch, useAppSelector, usePathname } from '../config/hooks';

import Loader from '../components/Loader';
import CharactersList from '../components/CharactersList';

const Characters: React.FunctionComponent = () => {
  const pageNum = useAppSelector((state) => state.pagination.currPage);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const { data, isLoading } = useGetCharactersPageQuery(`${pageNum}&gender=${gender}&name=${name}`);
  const dispatch = useAppDispatch();

  const pathname: string = usePathname();
  const [showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    if (data) {
      dispatch(setPages(data.pages))
    }
    if (pathname === '/') {
      window.location.pathname = '/characters'
    }
  })

  const onChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    return e.target.value && e.target.value !== 'all' ? setGender(e.target.value) : setGender('');
  }

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.value ? setName(e.target.value) : setName('')
  }

  if (isLoading) {
    return (
      <Loader width={'200px'} height={'10px'} />
    )
  } else {
    return (
      <div>
        <div className="filters flex jc--end">
          {
            showFilters && (
              <div className='flex'>
                <div className='p--0-2'>
                  <label className='m--r-1' htmlFor="name">
                    Filter by name
                  </label>
                  <input style={{height: '100%'}} className='p--2-5 rounded--s' type="text" name="name" id="name" autoComplete='off' onChange={e => onChangeName(e)} />
                </div>
                <div className="p--0-2">
                  <select className='p--2-5 rounded--s' name="gender" id="gender" onChange={e => onChangeGender(e)}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">female</option>
                  </select>
                </div>
              </div>
            )
          }
          {
            showFilters ? (
              <button className="btn btn--primary rounded--s p--2-5">Apply</button>
            ): (
              <button className="btn btn--primary rounded--s p--2-5" onClick={() => setShowFilters(!showFilters)}>Filters</button>
            )
          }
        </div>
        <CharactersList characters={data?.characters} />
      </div>
    )
  }
  
}

export default Characters;
