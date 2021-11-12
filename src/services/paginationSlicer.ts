import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPaginationSlicer {
  pages: number;
  currPage: number;
}

export const initialState: IPaginationSlicer = {
  pages: 0,
  currPage: 1,
}

export const paginationSlicer = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changeCurrPage: (state, action: PayloadAction<number | null>) => {
      if (action.payload) {
        state.currPage = action.payload;
      } else {
        state.currPage = 1;
      }
    },
    setPages: (state, action: PayloadAction<number | null>) => {
      if (action.payload) {
        state.pages = action.payload
      } else {
        state.pages = 0;
      }
    }
  }
})

export const { changeCurrPage, setPages} = paginationSlicer.actions;
export default paginationSlicer.reducer;