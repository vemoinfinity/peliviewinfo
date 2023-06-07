const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTZlMDI2MDc4MDViYmQ0ZjNhNzJkN2NjNzNlMmM1YSIsInN1YiI6IjY0NzdhNTA5OTM4MjhlMDEzMzc1ZmFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.we8eJL2ji3BjfpATTOXb297a9NRy21JyUdkDuOc1S6c'
  }
};

fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));