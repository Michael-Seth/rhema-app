//import axios from "axios";
import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      bVerse: null
    };
  }

  componentDidMount() {
    this.fetchBible();
  }

  async fetchBible() {
    const url =
      "https://beta.ourmanna.com/api/v1/get/?format=json&order=random";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.verse.details.text);
    this.setState({ bVerse: data, loading: false });
  }

  render() {
    // const { advice } = this.state;
    return (
      <div>
        <div className="app">
          {this.state.loading || !this.state.bVerse ? (
            <div className="card">loading...</div>
          ) : (
            <div className="card">
              <div className="verse">
                {" "}
                {this.state.bVerse.verse.details.text}
              </div>
              <div className="reference">
                {this.state.bVerse.verse.details.reference}
              </div>

              <button onClick={this.fetchBible.bind(this)} className="button">
                <strong>rhema bank</strong>
              </button>
            </div>
          )}
        </div>
        <div className="footer">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Michael Seth
        </div>
      </div>
    );
  }
}

export default App;
