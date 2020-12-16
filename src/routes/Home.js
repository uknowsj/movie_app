import React from "react"
import axios from "axios"
import Movies from "../components/Movies"
import "./Home.css"

class App extends React.Component{ //리액트 컴포넌트의 스테이트를 쓰기위해 클래스 컴포넌트 사용
  state={
    isLoading : true,
    moviesArray : [],
  };
  //axios가 느리기 때문에 axios로딩될 때 까지 기다리라고 하고싶음
  getMovies=async()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    //movies.data.data.movies
    this.setState({moviesArray:movies,isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading,moviesArray} = this.state; 
    return (
    <section className="container">
      {isLoading?
        (
          <div className="loader">
            <span className="loader__text">"Loading.."</span>
          </div>
        ):
        (
          <div className="movies">
            {moviesArray.map(movie=>{
              return (
              <Movies 
                key={movie.id} 
                id={movie.id}  
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres} 
                year = {movie.year} 
                />)
            })}
          </div>
        )
      }
      
    </section>
)
  };
}
export default App;