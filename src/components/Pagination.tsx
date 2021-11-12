import React from 'react';
import { useAppDispatch, useAppSelector } from '../config/hooks';

import iconNext from '../assets/icons/chevron__right.svg'
import iconPrev from '../assets/icons/chevron_left.svg'


import { changeCurrPage } from '../services/paginationSlicer'

function generatePaginationButtons(curr: number, pages: number): Array<number> {
  const result: Array<number> = []
  const maxButton = 7;
  const halfOfMaxButton = Math.floor(7 / 2);
  if (curr < maxButton - halfOfMaxButton) {
    for (let i = 1; i <= maxButton; i++) {
      result.push(i);
    }
  } else if (curr + 3 >= pages) {
    for (let i = pages; i > pages - maxButton; i--) {
      result.push(i);
    }
    result.reverse()
  } else {
    for (let i = curr - halfOfMaxButton; i <= curr + halfOfMaxButton; i++) {
      result.push(i)
    }
  }
  return result;
}

const Pagination = () => {
  const pagesCount = useAppSelector((state) => state.pagination.pages);
  const currPage = useAppSelector((state) => state.pagination.currPage);
  const paginationNumber: Array<number> = generatePaginationButtons(currPage, 42);
  const dispatch = useAppDispatch();

  const changePage = (dir: string): void => {
    switch (dir) {
      case 'prev':
        dispatch(changeCurrPage(currPage - 1));
        break;
      case 'next':
        dispatch(changeCurrPage(currPage + 1));
        break;
      case 'end':
        dispatch(changeCurrPage(pagesCount));
        break;
      case 'first':
        dispatch(changeCurrPage(1));
        break;
      default:
    }
  }

  return (
    <div className=" pagination p--t-4 p--b-4">
      <div className="flex jc--center">
        <button
          disabled={currPage <= 4}
          className={'btn m--r-1 flex jc--center ai--center' + (currPage <= 4 ? ' btn--disabled': ' btn--dark')}
          style={{ width: 30, height: 30, borderRadius: '50%' }}
          onClick={() => changePage('first')}
        >
          <img src="/assets/start.svg" alt="start" title="To first page" />
        </button>

        <button
          disabled={currPage === 1}
          className={'btn m--r-1 flex jc--center ai--center' + (currPage === 1 ? ' btn--disabled': ' btn--dark')}
          style={{ width: 30, height: 30, borderRadius: '50%' }}
          onClick={() => changePage('prev')}
        >
          <img src={iconPrev} alt="prev" title="Previous page" />
        </button>

        <div className="flex">
          {
            paginationNumber.map((item: number) => {
              return (
                <button
                  key={item}
                  className={
                    'btn m--r-1 p--0-1 flex jc--center ai--center' +
                    (Number(item) === Number(currPage) ? ' btn--disabled' : ' btn--dark')
                  }
                  disabled={Number(item) === Number(currPage)}
                  style={{ fontSize: 20, borderRadius: '50%', width: 30, height: 30 }}
                  onClick={() => dispatch(changeCurrPage(item))}
                >
                  {item}
                </button>
              )
            })
          }
        </div>

        <button
          disabled={currPage === pagesCount}
          className={'btn m--r-1 flex jc--center ai--center' + (currPage === pagesCount ? ' btn--disabled': ' btn--dark')}
          style={{ width: 30, height: 30, borderRadius: '50%' }}
          onClick={() => changePage('next')}
        >
          <img src={iconNext} alt="next" title="Next page" />
        </button>

        <button
          disabled={currPage >= pagesCount - 3}
          className={'btn m--r-1 flex jc--center ai--center' + (currPage === pagesCount - 3 ? ' btn--disabled': ' btn--dark')}
          style={{ width: 30, height: 30, borderRadius: '50%' }}
          onClick={() => changePage('end')}
        >
          <img src="/assets/end.svg" alt="end" title="To last page" />
        </button>
      </div>
    </div>
  )
}

export default Pagination;