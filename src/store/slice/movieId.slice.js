import { createSlice } from '@reduxjs/toolkit';

const movieIdSlice = createSlice({
  name: 'movieId',
  initialState: '',
  reducers: {
    setMovieIdSlice: (state, action) => {
      const movieId=action.payload;
      return movieId;
    },
  },
});

export const { setMovieIdSlice } = movieIdSlice.actions;

export default movieIdSlice.reducer;
