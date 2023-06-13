import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UpComing from '../pages/UpComing';
import TopRated from '../pages/TopRated';
import MovieDetails from '../components/MovieDetails';
import TvSeries from '../pages/TvSeries';
import TvSeriesDetails from '../components/TvSeriesDetails';

const AllRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []); 
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/upcoming' element={<UpComing/>}/>
      <Route path='/toprated' element={<TopRated/>}/>
      <Route path='/movies' element={<MovieDetails/>} />
      <Route path='/tvseries' element={<TvSeries/>} />
      <Route path='/tvseriesdetail' element={<TvSeriesDetails/>} />
    </Routes>
  );
};

export default AllRoutes;