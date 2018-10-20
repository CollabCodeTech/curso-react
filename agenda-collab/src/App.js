import React, { Component, Fragment } from "react";
import axios from "axios";

import CardCollab from "./components/CardCollab";

// Stateful
class App extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/courses").then(({ data }) => {
      this.setState({
        courses: data
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.courses.map(course => (
          <CardCollab {...course} key={course.id} />
        ))}
      </Fragment>
    );
  }
}

export default App;
