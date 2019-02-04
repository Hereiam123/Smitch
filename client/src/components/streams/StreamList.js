import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/fetchActions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCurrUserOptions(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to="/">
            <button className="ui button primary"> Edit</button>
          </Link>
          <Link to="/">
            <button className="ui button negative"> Delete</button>
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderCurrUserOptions(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
