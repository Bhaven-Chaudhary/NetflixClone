import { useLocation } from 'react-router-dom'
const API_KEY = 'b2776a4419852e57d3d8c258f87e6977'

export default function useRequestUrl() {
    const location = useLocation()
    // console.log(location.pathname)

    return {
        trendingUrl: `https://api.themoviedb.org/3/trending${location.pathname === '/' ? '/all' : location.pathname}/week?api_key=${API_KEY}&language=en-US`,
        netflixOriginalsUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=213`,
        topRatedUrl: `https://api.themoviedb.org/3${location.pathname === '/' ? '/movie' : location.pathname === '/popular' ? '/movie' : location.pathname}/top_rated?api_key=${API_KEY}&language=en-US`,
        actionMoviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
        crimeMoviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
        familyMoviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
        comedyMoviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
        horrorMoviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
        romanceMoviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        documentariesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,

    }
}
