import React, { useEffect } from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';

import { routes } from './config/routes';
import { IRoute } from './interfaces/routes';

import Modal from './components/Modal';
import Pagination from './components/Pagination';

import { useAppSelector } from './config/hooks';

const Application = () => {
  
  const showModal = useAppSelector((state) => state.modal);
  
  useEffect(() => {})
  
  return (
    <BrowserRouter>
      <div className="header">
        <div className="container">
          <header className="p--10-0 m--2-0 rounded--s bg--light">
            <div className="flex jc--center wid--100">
              <nav className="nav">
                <ul className="nav__menu flex">
                  {
                    routes.map((item: IRoute, i: number) => {
                      if (item.path !== '/') {
                        return (
                          <li className="name__menu__item m--0-1" key={`nav-item-${i}`}>
                            <Link to={item.path} className='btn btn--primary p--2-4'>
                              {item.name}
                            </Link>
                          </li>
                        )
                      } else {
                        return ''
                      }
                    })
                  }
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>

      <div className="container bg--light rounded--s p--2-2">
        <Routes>
          {
            routes.map((item: IRoute, i: number) => 
              <Route key={`route-${i}`} path={item.path} element={<item.element />} />
            )
          }
        </Routes>
      </div>

      <div className="container">
        <div className="m--2-0 p--5-10 bg--light rounded--s">
          <Pagination />
        </div>
      </div>
      {showModal.show && <Modal urls={['a', 'b']} />}
    </BrowserRouter>
  )
}

export default Application;