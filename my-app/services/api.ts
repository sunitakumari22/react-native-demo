export const TMDB_CONFIG={
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }

}

export const fetchMovies=async ({query}:{query:string})=>{
    const endpoint=query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`
    const response= await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.headers,
        
    })
    if(!response.ok){
        throw new Error('Failed to fetch movies');
    }
    const data= await response.json();
    return data.results;


}


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWQ5YjRkNDY2NDkyY2JkNTY1Y2FkZGQ4MWExOWU0MiIsIm5iZiI6MTc0NjA3MzA4MC40MjgsInN1YiI6IjY4MTJmNWY4NTIwZjc0ZjVmOWEwZjI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-WEatZ77vUpypDq_3V1osBQ6yEkl9u06m25vaPHcwvs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));