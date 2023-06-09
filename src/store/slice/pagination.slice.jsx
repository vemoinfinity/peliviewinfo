
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    increasePage(state) {
      state.currentPage += 1;
    },
    decreasePage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { increasePage, decreasePage } = paginationSlice.actions;

export default paginationSlice.reducer;
