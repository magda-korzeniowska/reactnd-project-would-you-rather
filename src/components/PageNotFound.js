import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h2 className='page-not-found'>404 Page Not Found</h2>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(PageNotFound)
