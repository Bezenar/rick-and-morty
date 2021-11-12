import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IModal {
  show: boolean;
  data: string;
}

export const initialState: IModal = {
  show: false,
  data: '',
}

export const modalSlicer = createSlice({
  name: 'modalSlicer',
  initialState,
  reducers: {
    switchModal: (state, action: PayloadAction<Array<string> | null>) => {
      state.show = !state.show;
      if (action.payload) {
        const data: Array<string> = action.payload.map((str: string) => str.split('/').pop() || '');
        state.data = data.join(',')
      } else {
        state.data = ''
      }
    },
  }
})

export const { switchModal } = modalSlicer.actions;

export default modalSlicer.reducer;