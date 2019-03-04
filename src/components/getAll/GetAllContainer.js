import React, { Component } from "react";
import GetAllDisplay from "./GetAllDisplay";
import { connect } from "react-redux";
import { makeRequest } from "../../redux/actions/async";

class GetAllContainer extends Component {
  componentDidMount() {
    this.props.makeRequest();
  }

  render() {
    const { jobs, pending } = this.props.requestReducer;
    return (
      <div>
        <h1>Jobs</h1>
        {pending ? <h1>Loading!</h1> : <GetAllDisplay jobs={jobs.all} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    makeRequest: payload => dispatch(makeRequest(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAllContainer);
