import React, { Component } from "react";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/fetchActions";
import { editStream } from "../../actions/editActions";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={this.props.stream}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
