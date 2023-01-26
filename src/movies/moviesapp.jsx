import React,{Component} from "react";
import styles from './moviesapp.module.css'
class Movies extends Component{
    constructor(){
        super()
        this.state={
            movies:[],search:''
        }
    }
    async componentDidMount(){
        const response=await fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        const jsondata=await response.json()
        this.setState({movies:[jsondata]})
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <input placeholder="search the movie" className={styles.input} value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}></input>
                <div className={styles.maindiv}>
                    {
                        this.state.movies.map(res=>
                            res.Search.filter(tit=>tit.Title.toLowerCase().includes(this.state.search.toLowerCase())).map(responce=>
                            <div className={styles.posttit}>
                                <div className={styles.Poster}>
                                    <img src={responce.Poster}  className={styles.card} alt="poster"></img>
                                </div>
                                <div className={styles.heading}>
                                    <h1 >{responce.Title}</h1>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Movies;