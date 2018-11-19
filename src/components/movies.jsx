import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = mov => {
    console.log(mov);

    this.setState({
      movies: this.state.movies.filter(m => m._id !== mov._id)
    });
  };

  handleStock = mov => {
    console.log(mov);
    if (mov.numberInStock !== 0) {
      let moviesUpdated = this.state.movies.map(movie => {
        if (movie._id === mov._id) {
          movie.numberInStock--;
          console.log(movie.numberInStock);
        }
        return movie;
      });

      console.log(moviesUpdated);
      this.setState({
        movies: moviesUpdated
      });
    } else {
      alert("Movie " + mov.title + " is out of stock");
    }
  };

  render() {
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Movie Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Rental Rate</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(mov => {
            return (
              <tr>
                <th scope="row">{mov._id}</th>
                <td>{mov.title}</td>
                <td>{mov.genre.name}</td>
                <td>{mov.dailyRentalRate}</td>
                <td>{mov.numberInStock}</td>
                <td>
                  <button
                    className="btn btn-danger mr-3 btn-sm"
                    onClick={() => this.handleDelete(mov)}
                  >
                    {" "}
                    Delete{" "}
                  </button>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => this.handleStock(mov)}
                  >
                    {" "}
                    Buy{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Movies;
