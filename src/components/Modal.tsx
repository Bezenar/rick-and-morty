import React from 'react';
import { useAppDispatch } from '../config/hooks';
import { switchModal } from '../services/modalWindowSlicer';

const Modal: React.FC<{ urls: Array<string> }> = ({ urls }) => {
  const dispatch = useAppDispatch();
  const close = (e: any) => {
    if (e.target === e.currentTarget) {
      dispatch(switchModal(null));
    }
  }

  return (
    <div className="overlay flex jc--center ai--center" onClick={(e) => close(e)}>
      <div className="modal-window bg--white rounded--s p--a-5">
        <h1>MODAL WINDOW</h1>
      </div>
    </div>
  )
}

export default Modal;