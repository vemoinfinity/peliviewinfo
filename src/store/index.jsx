import { configureStore } from '@reduxjs/toolkit'
import movieIdSlice from './slice/movieId.slice'
import paginationSlice, { decreasePage, increasePage } from './slice/pagination.slice'

export default configureStore({
    reducer: {
      movieId: movieIdSlice,
      increasePage: increasePage,
      decreasePage: decreasePage,
      pagination: paginationSlice

    }
})
