import { configureStore } from '@reduxjs/toolkit'
import movieIdSlice from './slice/movieId.slice'
import paginationSlice, { decreasePage, increasePage } from './slice/pagination.slice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
      movieId: movieIdSlice,
      increasePage: increasePage,
      decreasePage: decreasePage,
      pagination: paginationSlice

    }
})
