import React, {Component} from 'react';
import Card from "./card";

class MovieList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card/>
                </div>
            </div>
        );
    }
}



export default MovieList;