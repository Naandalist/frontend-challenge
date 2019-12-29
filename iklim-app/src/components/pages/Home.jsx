import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import TableHead from "../layout/TableHead";
import HeadDesc from "../layout/HeadDesc";
import Dropdown from "../layout/Dropdown";

import { getDataWeather } from "../../config/ConfigAPI";
import { dataWeather } from "../../helper/dataProcessing";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      data: []
    };
  }
  getDataHandle = id => {
    getDataWeather(id).then(result => {
      if (result) {
        this.setState({
          name: result.city.name
        });
        const finalRes = dataWeather(result.list);
        setTimeout(() => {
          this.setState({ data: finalRes });
        }, 1000);
      }
    });
  };
  onSelectedCity = event => {
    console.log("EVENT... ", event.value);
    const id = event.value;
    this.setState({ data: [] });
    this.getDataHandle(id);
  };
  componentDidMount() {
    const defaultId = "1633070";
    this.getDataHandle(defaultId);
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <Dropdown selectOnChange={this.onSelectedCity} />
        <HeadDesc />
        {this.state.data.length < 1 ? (
          <Skeleton count={10} />
        ) : (
          <TableHead name={this.state.name} dataCity={this.state.data} />
        )}
      </>
    );
  }
}
export default Home;
