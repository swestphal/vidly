import React, {Component} from 'react';
import {deleteMovie, getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    handleDelete = (movie) => {

        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    renderMovies() {
        const {length: movieCount} = this.state.movies;
        return (
            <>
                <h4 className='mt-4'>{movieCount === 0 &&
                'No movies in Database' || 'Showing ' +
                movieCount + ' movies in the database'} </h4>
                <table className='table mt-5'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)}
                                        className='btn btn-danger btn-sm'>Delete
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </>
        );
    }

    render() {

        return (
            <>
                {this.renderMovies()}
            </>
        );
    }
}

export default Movies;