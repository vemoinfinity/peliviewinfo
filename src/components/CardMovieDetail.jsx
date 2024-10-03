/* eslint-disable react/prop-types */
import { Star } from "lucide-react"

export default function CardMovieDetail({ movie }) {
  const {
    title,
    overview,
    poster_path,
    release_date,
    genres,
    vote_average,
    vote_count,
    runtime,
    production_companies,
    production_countries,
    status,
    backdrop_path
  } = movie;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <div className="flex items-center text-yellow-400 mb-4">
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-2 text-lg">{vote_average}</span>
            <span className="ml-2 text-sm text-gray-300">({vote_count} votes)</span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 mb-6">{overview}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="font-medium">Release Date:</span> {release_date}</li>
                <li><span className="font-medium">Runtime:</span> {runtime} minutes</li>
                <li><span className="font-medium">Status:</span> {status}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {genres && genres.map((genre) => (
                  <span key={genre.id} className="px-2 py-1 bg-gray-600 rounded-full text-sm">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Production</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-1">Companies</h4>
                <ul className="list-disc list-inside">
                  {production_companies && production_companies.map((company) => (
                    <li key={company.id}>{company.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">Countries</h4>
                <ul className="list-disc list-inside">
                  {production_countries && production_countries.map((country, index) => (
                    <li key={index}>{country.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}