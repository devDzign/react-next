import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'

import { getMovies, getCategories } from '../actions'

const Home = (props) => {
    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                appName={"Movie DB"}
                                categories={props.categories || []}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel />
                            <div className="row">
                                <MovieList movies={props.movies || []} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.getInitialProps = async () => {
    const movies = await getMovies()
    const categories = await getCategories()

    return {
        movies,
        categories
    }
}

export default Home;

// import React, {Component} from 'react';
// import Head from 'next/head'
//
// import Navbar from "../components/navbar";
// import SideMenu from "../components/sideMenu";
// import Carousel from "../components/carousel";
// import Footer from "../components/footer";
// import MovieList from "../components/movieList";
//
// import {getMovies, getCategories} from '../actions'
//
// class Home extends Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             movies: [],
//             categories: [],
//             errorMessage: ''
//         }
//     }
//
//     async componentDidMount() {
//         let movies = await getMovies()
//             .catch(error => {
//                 this.setState(
//                     {
//                         errorMessage: 'error happen'
//                     }
//                 )
//             });
//         let categories = await getCategories();
//
//         this.setState(
//             {
//                 movies,
//                 categories
//             }
//         )
//
//     }
//
//     render() {
//         const {movies, categories, errorMessage} = this.state
//         return (
//             <>
//                 <Head>
//                     <title>Home</title>
//                     <link rel="stylesheet"
//                           href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//                           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//                           crossOrigin="anonymous"/>
//                     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//                             integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//                             crossOrigin="anonymous"></script>
//                     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//                             integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//                             crossOrigin="anonymous"></script>
//                     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//                             integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//                             crossOrigin="anonymous"></script>
//                 </Head>
//
//                 <Navbar/>
//
//                 <div className="home-page">
//                     <div className="container">
//
//                         <div className="row">
//                             <div className="col-lg-3">
//                                 <SideMenu nameApp={"Movie DB"} categories={categories}/>
//                             </div>
//
//                             <div className="col-lg-9">
//                                 <Carousel/>
//                                 {errorMessage ?
//                                     <div className="alert alert-danger" role="alert">
//                                         {errorMessage}
//                                     </div>
//                                     :
//                                     <MovieList movies={movies}/>
//                                 }
//
//                             </div>
//                         </div>
//
//                     </div>
//                 </div>
//
//
//                 <Footer/>
//
//                 <style jsx>{`
// .home-page {
// padding-top: 80px
// }
// `}
//                 </style>
//             </>
//         );
//     }
// }
//
// export default Home;