import React, { Component } from "react";
import UKLotto from "./lotto/Lotto";

class Lotto extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { lottonumbers: [] };
  }

  // Fetch lotto numbers after first mount
  componentDidMount() {
    this.getLottoNumbers();
  }

  getLocationDetails = () => {
    const location = this.props.location.pathname.substring(1);
    return location === "euro-million" ? "euro" : "lotto";
  }

  getLottoNumbers = () => {
    const whichRoute = this.getLocationDetails();
    console.log('whichRoute', whichRoute);
    fetch(`/api/${whichRoute}`)
      .then(res => res.json())
      .then(lottonumbers => this.setState({ lottonumbers }));
  }

  render() {
    return (
      <UKLotto
        {...this.state}
        getLottoNumbers={this.getLottoNumbers.bind(this)}
        location = {this.getLocationDetails()}
      />
    );
  }
}

export default Lotto;
