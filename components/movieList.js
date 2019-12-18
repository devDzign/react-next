import React, {Component} from 'react';

class MovieList extends Component {

    shorten = (text, start = 0, length = 100) => {
        if (text && length <= text.length) {
            return text.substr(start, length) + '...'
        }

        return text
    }

    renderMovies(movies) {
        return movies.map(movie =>
            (
                <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <p className="card-text">{this.shorten(movie.description)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>
            )
        )
    }

    render() {
        const {movies} = this.props
        return (
            <div className="row">
                {this.renderMovies(movies)}
            </div>
        );
    }
}


export default MovieList;