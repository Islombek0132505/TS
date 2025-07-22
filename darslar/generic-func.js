"use strict";
// interface MovieData {
//     page: string,
//     results: Movie[]
//     total_pages: number
//     total_results: number
// }
// interface Movie {
//     adult: boolean,
//     backdrop_path: string,
//     genre_ids: number[],
//     id: number
//     original_title: string
//     overview: string
//     poster_path: string
//     release_date: string
//     title: string
//     vote_average: number
//     vote_count: number
// }
// class MovieManager {
//     protected static api_key = "api_key=7ea6eda06e3a0abc87a489ba55981386"
//     protected static base_url = "https://api.themoviedb.org/3"
//     protected static lng_url = "language=en-US"
//     protected static async response<T>(url: string): Promise<T> {
//         try {
//             const response = await fetch(url)
//             if(!response.ok) {
//                 throw new Error(`Could not fetch ${url} status: ${response.status}`)
//             }
//             const data: T = await response.json()
//             return data
//         } catch (error) {
//             throw new Error((error as Error).message)
//         }
//     }
//     static async getPremiereMovies(page: number = 1) {
//         const data = await this.response<MovieData>(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&${this.api_key}`)
//         return data.results.slice(0, 2)
//     }
//     static async getTopRatedMovies(page: number = 1, callback: (data: Movie[]) => void) {
//         try {
//             const data = await this.response<MovieData>(`https://api.themoviedb2.org/3/movie/top_rated?language=en-US&page=${page}&${this.api_key}`)
//             callback(data.results.slice(0, 2))
//         } catch (error) {
//             console.log("Fetching error");
//         }
//     }
// }
// MovieManager.getTopRatedMovies(2, (movies => {
//     movies.map(movie => console.log(movie))
// }))
// MovieManager.getPremiereMovies().then(movies => {
//     movies.map(movie => console.log(movie))
// })
